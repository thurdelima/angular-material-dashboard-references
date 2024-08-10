import { Component, OnInit } from '@angular/core';
import { Platform} from '@angular/cdk/platform';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  public startDate: Date = new Date(2024, 9, 28);
  public minDate: Date = new Date(2024, 8, 28);
  public maxDate: Date = new Date(2024, 10, 28);

  // public startDate: Date = moment([2024, 9, 28]);
  // public minDate: Date = new Date(2024, 8, 28);
  // public maxDate: Date = new Date(2024, 10, 28);


  constructor(private platform: Platform) { }

  ngOnInit(): void {


  }

  public get isTouchDevice() {

    return this.platform.ANDROID || this.platform.IOS;
  }

}
