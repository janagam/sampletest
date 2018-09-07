import { Component, OnInit } from '@angular/core';
import { SlidersService } from './Service/sliders.service';
import { Isliders } from './Model/slider';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [SlidersService]
})
export class BannerComponent implements OnInit {
  homePage_Sliders: Isliders[];
  statusMessage: string;
  constructor(private _sliderserverice: SlidersService) { }

  ngOnInit() {
    this._sliderserverice.GetHomePageSlider().subscribe(sliders => this.homePage_Sliders = sliders,
      (error) => this.statusMessage = 'There is Problem with this service');
  }

}
