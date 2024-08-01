import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DatePipe } from '@angular/common';


interface Product {
  gstpercentage: any;
  id: number;
  name: string;
  gstPercentage: number;
  price: number;
}

@Component({
  selector: 'app-saledetails',
  templateUrl: './saledetails.component.html',
  styleUrls: ['./saledetails.component.css'],
})
export class SaledetailsComponent implements OnInit {
  editSales: any;
  salesDetails: any[] = [];
  productList: Product[] = [];
  admin: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {
    this.editSales = {
      id: 0,
      adminid: 1,
      subTotal: 0,
      gstTotal: 0,
      billTotal: 0,
      customerName: '',
      saleDate: '',
      mobileNo: '',
    };
  }

  ngOnInit(): void {
    const saleId = this.route.snapshot.params['id'];
    if (saleId) {
      this.loadSaleData(saleId);
    }

    this.api.get('products/').subscribe((data: any) => {
      this.productList = data;
      // console.log(this.productList);
    });
    
      this.addSalesDetailRow();

      const today = new Date();
      this.editSales.saleDate = this.datePipe.transform(today, 'yyyy-MM-dd');
    

      // const today = new Date();
      // const year = today.getFullYear();
      // const month = (today.getMonth() + 1).toString().padStart(2, '0');
      // const day = today.getDate().toString().padStart(2, '0');
      // this.editSales.saleDate = `${year}-${month}-${day}`;
  }

  addSalesDetailRow() {
    this.salesDetails.push({
      id: 0,
      saleid: 0,
      productid: 0,
      quantity: 0,
      price: 0,
      subtotal: 0,
      gstPercentage: 0,
      gstAmount: 0,
      billAmount: 0,
    });
  }

  loadSaleData(saleId: number): void {
    this.api.get('sales/' + saleId).subscribe(
      (data: any) => {
        // console.log('Sales Data:', data);

        this.editSales = {
          id: data.id,
          adminid: data.admin,
          subTotal: data.subTotal,
          gstTotal: data.gstTotal,
          billTotal: data.billTotal,
          customerName: data.customerName,
          saleDate: data.saleDate,
          mobileNo: data.mobileNo,
        };

        // Clear existing salesDetails array
        this.salesDetails = [];

        // Iterate through salesDetails from API response and push into this.salesDetails
        data.salesDetails.forEach((detail: any) => {
          this.salesDetails.push({
            id: detail.id,
            saleid: detail.saleid || 0,
            productid: detail.product.id,
            quantity: detail.quantity,
            price: detail.price,
            subtotal: detail.subtotal,
            gstPercentage: detail.gstPercentage,
            gstAmount: detail.gstAmount,
            billAmount: detail.billAmount,
          });
        });

        console.log('Sale data loaded successfully:', this.editSales, this.salesDetails);
      },
      (error) => {
        console.error('Error loading sale data:', error);
      }
    );
  }

  removeSalesDetailRow(index: number) {
    this.salesDetails.splice(index, 1); 
  }

  productChanged(index: number) {
    if (this.salesDetails[index].productid == 0) {
      this.salesDetails[index].price = 0;
      this.salesDetails[index].quantity = 0;
      this.salesDetails[index].gstPercentage = 0;
    } else {
      for (let i = 0; i < this.productList.length; i++) {
        if (this.productList[i].id == this.salesDetails[index].productid) {
          this.salesDetails[index].price = this.productList[i].price;
          this.salesDetails[index].quantity = 1;
          this.salesDetails[index].gstPercentage = this.productList[i].gstpercentage;
          break;
        }
      }
    }
    this.updateSubtotal(index);
  }
  

  updateSubtotal(index: number) {
    console.log('Before subtotal calculation - Quantity:', this.salesDetails[index].quantity);
    
    if (this.salesDetails[index].productid !== 0) {
      this.salesDetails[index].subtotal = this.salesDetails[index].quantity * this.salesDetails[index].price;
      this.salesDetails[index].gstAmount = this.salesDetails[index].subtotal * (this.salesDetails[index].gstPercentage / 100);
      this.salesDetails[index].billAmount = this.salesDetails[index].subtotal + this.salesDetails[index].gstAmount;
    }
    let CursubTotal = 0, CurgstTotal = 0, CurbillTotal = 0;
    for (let i = 0; i < this.salesDetails.length; i++) {
      if (this.salesDetails[i].productid !== 0) {
        CursubTotal += this.salesDetails[i].subtotal;
        CurgstTotal += this.salesDetails[i].gstAmount;
        CurbillTotal += this.salesDetails[i].billAmount;
      }
      console.log('After subtotal calculation - Quantity:', this.salesDetails[index].quantity);

    }
    this.editSales = {...this.editSales, subTotal: CursubTotal, gstTotal: CurgstTotal, billTotal: CurbillTotal, salesDetails: this.salesDetails,
    };
  }

  save() {
    this.updateSubtotal(0);
    console.log(this.editSales);

    const salesId = this.route.snapshot.params['id'];

    if (salesId) {
      this.api.put('sales/' + salesId, this.editSales).subscribe(
        () => {
          console.log('Sales updated successfully');
          this.router.navigate(['/admin/sales']);
        },
        (error) => {
          console.error('Error updating sales:', error);
        }
      );
    } else {
      this.api.post('sales/', this.editSales).subscribe(
        () => {
          console.log('Sale added successfully');
          this.router.navigate(['/admin/sales']);
        },
        (error) => {
          console.error('Error adding sales:', error);
        }
      );
    }
  }
}
