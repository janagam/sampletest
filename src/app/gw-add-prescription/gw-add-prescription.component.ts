import { Component, OnInit } from '@angular/core';
import { TabletName, UserMedicine, Userprescription } from '../gw-checkout/Models/prescription';
import { FormGroup } from '@angular/forms';
import { NgForm, FormControl, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { PrescriptionService } from '../gw-checkout/Services/prescription.service';

@Component({
  selector: 'app-gw-add-prescription',
  templateUrl: './gw-add-prescription.component.html',
  styleUrls: ['./gw-add-prescription.component.css']
})
export class GwAddPrescriptionComponent implements OnInit {
  TabletNameList: TabletName[] = [];
  userPrescriptionForm: FormGroup;
  tablelist: TabletName;
  fileupload: FormData;
  message: string;
  prescription_list: Userprescription[] = [];
  isloggeIn: boolean;
  isShowiv: boolean;
  hidediv: boolean;
  public buttonName: any = 'Add Prescription';
  FileName: string;

  constructor(private _prescriptionService: PrescriptionService) { }

  ngOnInit() {
    this.isShowiv = false;
    this.isloggeIn = false;
    this.hidediv = false;
    const user_AccesToken = sessionStorage.getItem('userToken');
    if (user_AccesToken !== null) {
      this.buttonName = 'Add Prescription';
      this.isShowiv = true;
      this.isloggeIn = true;
      this.hidediv = true;
      this._prescriptionService.GetListOfPrescritption().subscribe((resp: any) => {
        this.prescription_list = resp;
      });
    }
    this.userPrescriptionForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      DoctorName: new FormControl('', [Validators.required]),
      tabletName: new FormArray([]),
      Upload: new FormControl(''),
    });
  }
  addFieldValue() {
    (<FormArray>this.userPrescriptionForm.get('tabletName')).push(new FormControl(''));
  }
  Delete(index: number) {
    (<FormArray>this.userPrescriptionForm.get('tabletName')).removeAt(index);
  }
  submit(form: any, event): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    const user_AccesToken = sessionStorage.getItem('userToken');
    this.TabletNameList = [];
    if (form.tabletName.length > 0) {
      for (let i = 0; i < form.tabletName.length; i++) {

        const tablelist: TabletName = {
          tbtName: form.tabletName[i]
        };
        this.TabletNameList.push(tablelist);
      }
    }
    const prescription_list: UserMedicine = {
      UserID: null,
      UserName: form.Name,
      tabletName: this.TabletNameList,
      Email: form.Email,
      PhoneNumber: form.PhoneNumber,
      DoctorName: form.DoctorName
    };
    console.log(prescription_list);
    console.log(this.fileupload);
    if (this.fileupload === undefined) {

      this._prescriptionService.AddPrescription(prescription_list).subscribe((resp: any) => {
        if (resp === '200') {
          this.userPrescriptionForm.reset();
          this.message = 'Uploaded successfully';
          setTimeout(function () {
            this.message = '';
          }.bind(this), 3000);
        }
      });
    } else {
      this._prescriptionService.UploadPrescription(form.Name, form.DoctorName, this.fileupload).subscribe((resp: any) => {
        if (resp === '200') {
          this.userPrescriptionForm.reset();
          this.message = 'Uploaded successfully';
          setTimeout(function () {
            this.message = '';
          }.bind(this), 3000);
        }
      });
    }
  }

  fileChange(event) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
       this.FileName = file.name;
      formData.append('UploadedImage', file, file.name);
      this.fileupload = formData;
    }
  }
  GetListOfPrescritption() {
    this._prescriptionService.GetListOfPrescritption().subscribe((resp: any) => {
      this.prescription_list = resp;
    });

  }
  toggle(operation: string): void {
    if (this.isShowiv === false) {

      this.buttonName = 'Add Prescription';
      this.isShowiv = true;
      this.hidediv = true;
      this.isloggeIn = true;

    } else {
      this.buttonName = 'Show List';
      this.isShowiv = false;
      this.hidediv = true;
      this.isloggeIn = false;
    }
  }

}
