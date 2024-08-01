import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  adminCount: any;
  productCount: any;
  revenueCount: any;
  invoicesCount: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.get('admins/').subscribe((data: any) => {
      this.adminCount = data.length;
    });

    this.api.get('products/').subscribe((data: any) => {
      this.productCount = data.length;
    });

    this.api.get('sales/').subscribe((data: any) => {
      this.invoicesCount = data.length;
      this.revenueCount = this.calculateRevenueTotal(data);
    });
  }

  calculateRevenueTotal(salesData: any[]): number {
    let totalRevenue = 0;

    for (const sale of salesData) {
      totalRevenue += sale.billTotal;
    }

    return totalRevenue;
  }
}
