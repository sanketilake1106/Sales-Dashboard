import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsComponent } from './admins/admins.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { SaledetailsComponent } from './saledetails/saledetails.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  {path:"", component:LandingComponent,
  children:[
   {path:"dashboard", component:DashboardComponent},
   {path:"admins", component:AdminsComponent},
   {path:"admin", component:AdminComponent},
   {path:"admin/:id", component:AdminComponent},
   {path:"products", component:ProductsComponent},
   {path:"product", component:ProductComponent},
   {path:"product/:id", component:ProductComponent},
   {path:"sales", component:SalesComponent},
   {path:"saledetails", component:SaledetailsComponent},
   {path:"saledetails/:id", component:SaledetailsComponent},
   {path:"invoices", component:InvoicesComponent},
   {path:"profile", component:ProfileComponent},
   {path:"**", component:DashboardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
