import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Productlist } from '../admin/productlist';
import { Desc } from './desc';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  users: Productlist[]=[];
  desc:Desc[]=[];


  constructor(private httpClient:HttpClient) { }
  getUser(){
    return this.httpClient.get(environment.apiUrl+'product/getproduct')
    .toPromise()
    .then(
    result =>{
      console.log('From service ........');
     console.log(result);
     this.users=result as Productlist[];
    },
    error =>{
      console.log(error);

    }
    );
   }
   getDesc(){
    return this.httpClient.get(environment.apiUrl+'product/desc')
    .toPromise()
    .then(
    result =>{
      console.log('From service ........');
     console.log(result);
     this.desc=result as Desc[];
    },
    error =>{
      console.log(error);

    }
    );
   }

   }


