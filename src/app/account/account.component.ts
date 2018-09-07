import { Component, OnInit } from '@angular/core';
import { AccountService } from './service/account.service';
import { UpdateInfo } from './model/update-info';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  data: any;
  profile: UpdateInfo;
  accessToken: string;
  constructor(private _accountservice: AccountService, private router: Router) { }
  ngOnInit() {
    const token = sessionStorage.getItem('userToken');
    this.accessToken = token;
    this._accountservice.GetProfile(token).subscribe(data => {
      this.profile = data;
      if (this.profile.gender === true) {
        this.profile.male = true;
        this.profile.female = false;
      } else {
        this.profile.male = false;
        this.profile.female = true;
      }
    });
  }
  submitForm(form: NgForm): void {
    this._accountservice.UpdateProfile(this.profile, this.accessToken).subscribe((resp: any) => {
      if (resp === '401') {
        this.router.navigate(['/Home']);
      }
    });
  }
  ChangeGender(event): void {
    if (event.target.value === 'female') {
      this.profile.gender = false;
      this.profile.female = true;
      this.profile.male = false;
    } else {
      this.profile.gender = true;
      this.profile.female = false;
      this.profile.male = true;
    }
  }
}
