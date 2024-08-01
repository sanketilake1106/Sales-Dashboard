import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsComponent } from './admins/admins.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { ProductComponent } from './product/product.component';
import { SaledetailsComponent } from './saledetails/saledetails.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicesComponent } from './invoices/invoices.component';


@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    AdminsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProductsComponent,
    SalesComponent,
    ProductComponent,
    SaledetailsComponent,
    AdminComponent,
    ProfileComponent,
    InvoicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ],
})
export class AdminModule { }
