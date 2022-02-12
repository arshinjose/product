import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BillingService } from 'src/app/shared/billing.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  page: number=1;

  constructor(public billingService:BillingService, public app:AppComponent) { }

  ngOnInit(): void {
    this.billingService.getUser();
  }

}
