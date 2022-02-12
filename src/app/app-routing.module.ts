import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DecComponent } from './admin/dec/dec.component';
import { PriceComponent } from './admin/price/price.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';




const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'prod',component:ProductListComponent},
  {path: 'price',component:PriceComponent},
  {path: 'user',component:UserComponent},
  {path: 'desc',component:DecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
