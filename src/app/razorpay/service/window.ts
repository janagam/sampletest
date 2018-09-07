import { Injectable } from '@angular/core';
import { RazorPayVM, PaymentVM } from '../../gw-checkout/Models/address';

function _window(): any {
    // return the global native browser window object
    return window;
}
@Injectable()
export class WindowRef {
    razorVm: RazorPayVM;
    paytmVm: PaymentVM;
    orderId: string;
    get nativeWindow(): any {
        return _window();
    }

    setData(data: any) {
        this.razorVm = data;
    }
    getData(): any {
        return this.razorVm;
    }
    setPayTmData(data: any) {
        this.paytmVm = data;
    }
    returnPayTmData(): any {
        return this.paytmVm;
    }
    setOrderId(data: any): any {
        this.orderId = data;
    }
    returnOrderId(): any {
        return this.orderId;
    }
}


