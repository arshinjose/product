import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BillingService } from 'src/app/shared/billing.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  page: number=1;

  constructor(public billingService:BillingService, public app:AppComponent){ }
  ngOnInit(): void {
    this.billingService.getUser();
  }

}
