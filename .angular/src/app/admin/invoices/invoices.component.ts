import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  sales: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadSales();
    this.refreshSalesList();
  }

  loadSales() {
    this.api.get('sales/').subscribe(
      (result: any) => {
        console.log(result);
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

  print() {
    const printContents = document.getElementById('print-content')?.innerHTML;

    if (printContents) {
      const printWindow = window.open('', '_blank');
      printWindow?.document.write(
        '<html><head><title>Print</title></head><body>'
      );
      printWindow?.document.write(printContents);
      printWindow?.document.write('</body></html>');
      printWindow?.document.close();
      printWindow?.print();
    } else {
      console.error('Print contents not found.');
    }


    // const prtContent = document.getElementById('print-content');

    // if(prtContent){
    //   const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    //   let str = "<style>img{vertical-align: middle;}</style>";
    //     let printmessage = str + prtContent.innerHTML;
    //   WinPrint?.document.write(printmessage);
    //     WinPrint?.document.close();
    //     WinPrint?.focus();
    //     WinPrint?.print();
    //     //WinPrint.close();
    // }
      
  }
}