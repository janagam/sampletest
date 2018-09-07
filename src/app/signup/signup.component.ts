import { Component, OnInit } from '@angular/core';
import { User } from '../login/Model/login.Model';
import { Login } from '../login/Model/login.model';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignUpService } from './Services/sign-up.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoginError = false;
  Message: string;
  respones: string;
  success: boolean;
  user: User = {
    UserName: '',
    Password: '',
    Email: '',
    FirstName: '',
    LastName: ''
  };
  public myForm: FormGroup;



  constructor(private userService: SignUpService, fb: FormBuilder ,
   private notifications: NotificationsService) {
      this.myForm = fb.group({
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),

    });


   }

  ngOnInit() {
    this.success = false;
    // this.myForm = new FormGroup({
    //   UserName: new FormControl('', [Validators.required]),
    //   Password: new FormControl('', [Validators.required]),
    //   Email: new FormControl('', [Validators.required]),
    //   FirstName: new FormControl('', [Validators.required]),
    //   LastName: new FormControl('', [Validators.required]),

    // });
  }

//   submitForm(userRegistrationForm: NgForm) {
//     // tslint:disable-next-line:no-debugger
//     debugger;
//     this.userService.createUser(this.user).subscribe((resp: any) => {
//       // tslint:disable-next-line:no-debugger
//       debugger;
//       if (resp === '201') {
//         this.success = true;
//         this.respones = resp;
//         this.Message = 'Registerd Successfully';
//         this.isLoginError = true;
//         const login: User = {
//           UserName: '',
//           Password: '',
//           Email: '',
//           FirstName: '',
//           LastName: ''
//         };
//         this.user = login;
//       } else {
//         this.respones = resp;
//         this.success = false;
//         this.Message = 'You have already register';
//         this.isLoginError = true;
//         const login: User = {
//           UserName: '',
//           Password: '',
//           Email: '',
//           FirstName: '',
//           LastName: ''
//         };
//         this.user = login;
// // userRegistrationForm.onReset();

//       }
//     });
//   }

submit(form: any, event): void {
  this.userService.createUser(form).subscribe((resp: any) => {
          if (resp === '201') {
            this.success = true;
            this.respones = resp;
          //  this.Message = 'Registerd Successfully';
          this.notifications.success(
            'Success',
            'Registerd Successfully',
            {
              timeOut: 3000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: true,
              maxLength: 50
            }
          );
            this.isLoginError = true;
            this.myForm.reset();
          } else {
            this.respones = resp;
            this.success = false;
         //   this.Message = 'You have already register';
            this.notifications.warn(
              'Warning',
              'You have already register',
              {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
              }
            );

            this.isLoginError = true;
            this.myForm.reset();

          }
        });
}
UserName(): void {
  if (this.myForm.controls['UserName'].value === null || this.myForm.controls['UserName'].value === '') {
    this.notifications.error(
      'Warning',
      'UserName is required',
      {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 50
      }
    );
  }
}
FirstName(): void {
    if (this.myForm.controls['FirstName'].value === null || this.myForm.controls['FirstName'].value === '') {
      this.notifications.error(
        'Warning',
        'FirstName is required',
        {
          timeOut: 3000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: true,
          maxLength: 50
        }
      );
    }
  }
  LastName(): void {
      if (this.myForm.controls['LastName'].value === null || this.myForm.controls['LastName'].value === '') {
        this.notifications.error(
          'Warning',
          'LastName is required',
          {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
          }
        );
      }
    }
    Email(): void {
      const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (this.myForm.controls['Email'].value === null || this.myForm.controls['Email'].value === '') {
          this.notifications.error(
            'Warning',
            'Email is required',
            {
              timeOut: 3000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: true,
              maxLength: 50
            }
          );
        }
      if (EMAIL_REGEXP.test(this.myForm.controls['Email'].value) === false) {
        this.notifications.warn(
          'Warning',
          'Email is Not valid',
          {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
          }
        );
      }
      }
      Password(): void {
          if (this.myForm.controls['Password'].value === null || this.myForm.controls['Password'].value === '') {
            this.notifications.error(
              'Warning',
              'Password is required',
              {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 50
              }
            );
          }
        }
}

