import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  sales: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadSales();
    this.refreshSalesList();
  }

  loadSales() {
    this.api.get('sales/').subscribe(
      (result: any) => {
        // console.log(result);
        this.sales = result;
      },
      (error) => {
        console.error('Error fetching sales:', error);
      }
    );
  }

  private refreshSalesList() {
    this.loadSales();
  }

  editSales(salesId: number): void {
    this.router.navigate(['/admin/saledetails/' + salesId]);
  }

  deleteSales(salesId: number): void {
    this.api.delete('sales/' + salesId).subscribe(
      () => {
        console.log('Sale deleted successfully');
        this.refreshSalesList();
      },
      (error) => {
        console.error('Error deleting sales:', error);
      }
    );
  }

  getTotal(property: string): number {
    return this.sales.reduce((acc, curr) => acc + curr[property], 0);
  }

  // printSalesInvoice(salesId: number): void {
  //   const printWindow = window.open('', '_blank');

  //   if (printWindow) {
  //     const salesItem = this.sales.find((s) => s.id === salesId);

  //     if (salesItem) {
  //       const tableHTML = `
  //       <br><br><div class="container rounded">
  //       <div class="card border border-5">
  //       <div class="pagetitle" style="text-align: center;">
  //           <h1 style="font-size: 50px; margin-top: 15px;"><b>INVOICES</b></h1>
  //       </div>
      
  //       <div class="card-body">
  //           <table class="table table-bordered border border-5 rounded-33">
  //             <thead>
  //               <tr>
  //                 <th>No</th>
  //                 <th>Customer Name</th>
  //                 <th>Customer Mobile No</th>
  //                 <th>Subtotal</th>
  //                 <th>GST Total</th>
  //                 <th>Bill Total</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               <tr>
  //                 <td>1</td>
  //                 <td>${salesItem.customerName}</td>
  //                 <td>${salesItem.mobileNo}</td>
  //                 <td>${salesItem.subTotal}</td>
  //                 <td>${salesItem.gstTotal}</td>
  //                 <td>${salesItem.billTotal}</td>
  //               </tr>
  //             </tbody>
  //             <tfoot class=" table-success">
  //               <tr>
  //                 <th>
  //                   <h4><b>Total</b></h4>
  //                 </th>
  //                 <th></th>
  //                 <th></th>
  //                 <th>${this.getTotal('subTotal')}</th>
  //                 <th>${this.getTotal('gstTotal')}</th>
  //                 <th>${this.getTotal('billTotal')}</th>
  //               </tr>
  //             </tfoot>
  //           </table>
  //         </div>
  //       </div>
  //       </div>
  //       </div>`;

  //       printWindow.document.write(
  //         '<html><head><title>Sales Invoice</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></head><body>'
  //       );
  //       printWindow.document.write(tableHTML);
  //       printWindow.document.write('</body></html>');

  //       printWindow.document.close();
  //       printWindow.print();
  //     } else {
  //       console.error('Sales item not found for ID:', salesId);
  //     }
  //   } else {
  //     console.error('Error opening print window');
  //   }
  // }



  print_report(divname: string): void {
    const prtContent: HTMLElement | null = document.getElementById(divname);
  
    if (prtContent) {
      try {
        const WinPrint = window.open('', '_blank');
        if (WinPrint) {
          let str = "<style>img{vertical-align: middle;}</style>";
          let printmessage = str + prtContent.innerHTML;
          WinPrint.document.write(printmessage);
          WinPrint.document.close();
          WinPrint.focus();
          WinPrint.print();
          WinPrint.onafterprint = () => {
            WinPrint.close();
          };
        } else {
          console.error('Error opening print window.');
        }
      } catch (error) {
        console.error('Error printing:', error);
      }
    } else {
      console.error(`Element with id '${divname}' not found.`);
    }
  }
  
  

  print() {
    this.router.navigate(['/admin/invoices']);


    // const printContents = document.getElementById('print-content')?.innerHTML;

    // if (printContents) {
    //   const printWindow = window.open('', '_blank');
    //   printWindow?.document.write('<html><head><title>Print</title></head><body>');
    //   printWindow?.document.write(printContents);
    //   printWindow?.document.write('</body></html>');
    //   printWindow?.document.close();
    //   printWindow?.print();
    // } else {
    //   console.error('Print contents not found.');
    // }
  
  }
}

