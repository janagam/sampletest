export class UserMedicine {
    UserID: string;
    UserName: string;
    tabletName: TabletName[];
    Email: string;
    PhoneNumber: string;
    DoctorName: string;
}
export interface TabletName {
    tbtName: string;
}

export class Userprescription {
    PrescriptionID: number;
    UserID: number;
    DoctorName: string;
    PrescriptionName: string;
    PrescriptionType: string;
    fileName: string;
    DateOfPrescription: Date;
    ModifiedOn: Date;
}
