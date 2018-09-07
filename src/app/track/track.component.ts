import { Component, OnInit } from '@angular/core';
import { TrackorderService } from './Services/trackorder.service';
import { TrackOrder, TrackingOrderDetials } from './Model/track-order';
import { ScanDetail } from '../orderdetails/Model/order-details-vm';
import { Router } from '@angular/router';
import {PagerServiceService} from '../pageservice/pager-service.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  trackorder: TrackOrder;
  trackingorder_details: TrackingOrderDetials;
  orderId: string;
  TrackingId: string;
  scandetails: ScanDetail[] = [];
  scannedList: ScanDetail[] = [];
  count = 0;
  IsHidden = true;
  access_token: string;
  manifested = false;
  InTransit = false;
  Pending = false;
  Dispatched = false;
  Delivered = false;
  errorMessage: string;
  statusCode: number;
  itemcount = 0;
  pager: any = {};
  pagedItems: any[];
  private allItems: TrackOrder[] = [];
  tra_order: TrackOrder;
  constructor(private _trackOrderService: TrackorderService, private router: Router, private pagerService: PagerServiceService) {
  }

  ngOnInit() {
    const token = sessionStorage.getItem('userToken');
    this.access_token = token;
    this._trackOrderService.GetTrackOrder(token).subscribe(data => {
      this.trackorder = data;
      const model = new TrackOrder();
      for (const key in this.trackorder) {
        if (this.trackorder.hasOwnProperty(key)) {
          this.allItems.push(this.trackorder[key]);
          this.itemcount = this.itemcount + 1;
        }
      }
      this.setPage(1);
    }, (error) => {
      if (error.status === 401 && error.statusText === 'Unauthorized') {
        this.statusCode = 401;
        alert('session is expired,try to login');
        this.router.navigate(['/Home']);

      }
    });
  }
  setPage(page: number) {

    this.pager = this.pagerService.getPager(this.itemcount, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  TrackOrderDetials(awb: string, order_id: string) {
    this._trackOrderService.GetTrackOrderDetial(this.access_token, awb).subscribe(data => {
      // tslint:disable-next-line:no-debugger
      debugger;
      this.trackingorder_details = data;
      this.orderId = order_id;
      this.TrackingId = awb;
      console.log(this.trackingorder_details);
      this.scandetails = [];
      for (const key in data.ScanDetail) {
        if (data.ScanDetail.hasOwnProperty(key)) {
          const model1 = new ScanDetail();
          model1.instructions = data.ScanDetail[key].instructions;
          model1.scan = data.ScanDetail[key].scan;
          model1.statusCode = data.ScanDetail[key].statusCode;
          model1.scannedLocation = data.ScanDetail[key].scannedLocation;
          model1.statusDateTime = data.ScanDetail[key].statusDateTime;
          model1.scanDateTime = data.ScanDetail[key].scanDateTime;
          model1.SscanType = data.ScanDetail[key].SscanType;
          this.scandetails.push(model1);
        }
      }
      this.scannedList = [];
      for (let i = 0; i < this.scandetails.length; i++) {
        if (this.scandetails[i].scan.toString() === 'Manifested') {
          this.manifested = true;
          const item: ScanDetail = this.scandetails[i];
          this.scannedList.push(item);
        }
        if ((this.scandetails[i].scan === 'In Transit' ||
          this.scandetails[i].scan === 'Manifested')
          && this.scandetails[i].scan === 'In Transit') {
          if (this.count < 5) {
            const item: ScanDetail = this.scandetails[i];
            this.count = this.count + 1;
            this.scannedList.push(item);
            this.InTransit = true;
            this.manifested = true;
          }
        }
        if (this.scandetails[i].scan === 'Pending') {
          if ((this.scandetails[i].scan === 'In Transit'
            || this.scandetails[i].scan === 'Manifested'
            || this.scandetails[i].scan === 'Pending') &&
            (this.scandetails[i].scan === 'Pending')) {
            const item: ScanDetail = this.scandetails[i];
            this.scannedList.push(item);
            this.InTransit = true;
            this.manifested = true;
            this.Pending = true;
          }
        }
        if ((this.scandetails[i].scan === 'In Transit'
          || this.scandetails[i].scan === 'Manifested'
          || this.scandetails[i].scan === 'Pending'
          || this.scandetails[i].scan === 'Dispatched') &&
          (this.scandetails[i].scan === 'Dispatched')) {
          const item: ScanDetail = this.scandetails[i];
          this.scannedList.push(item);
          this.scannedList.push(item);
          this.InTransit = true;
          this.manifested = true;
          this.Pending = true;
          this.Dispatched = true;


        }
        if ((this.scandetails[i].scan === 'In Transit'
          || this.scandetails[i].scan === 'Manifested'
          || this.scandetails[i].scan === 'Pending'
          || this.scandetails[i].scan === 'Dispatched'
          || this.scandetails[i].scan === 'Delivered') &&
          (this.scandetails[i].scan === 'Delivered')) {
          const item: ScanDetail = this.scandetails[i];
          this.scannedList.push(item);
          this.InTransit = true;
          this.manifested = true;
          this.Pending = true;
          this.Dispatched = true;
          this.Delivered = true;
        }
      }
      console.log(this.scannedList);
    });
  }
  ShowDiv(): void {
    this.IsHidden = !this.IsHidden;
    if (this.IsHidden) {
    } else {
    }
  }
}
