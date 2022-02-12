import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BillingService } from 'src/app/shared/billing.service';

@Component({
  selector: 'app-dec',
  templateUrl: './dec.component.html',
  styleUrls: ['./dec.component.scss']
})
export class DecComponent implements OnInit {
  page: number=1;

  constructor(public billingService:BillingService, public app:AppComponent) { }

  ngOnInit(): void {
    this.billingService.getDesc();
  }

}
