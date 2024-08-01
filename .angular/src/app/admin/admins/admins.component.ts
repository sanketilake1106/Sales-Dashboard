import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
})
export class AdminsComponent implements OnInit {
  
  admins: any[] = [];

  constructor(private api: ApiService, private router:Router) {}

  ngOnInit(): void {
    this.loadAdmins();
    this.refreshAdminList();
  }

  loadAdmins(): void {
    this.api.get('admins/').subscribe(
      (data: any) => {
        this.admins = data;
      },
      (error) => {
        console.error('Error fetching admins:', error);
      }
    );
  }
    
  editAdmin(adminId: number): void {
    this.router.navigate(['/admin/admin/' + adminId])
  }
 


  private refreshAdminList(): void {
    // Fetch the updated list of admins after delete
    this.loadAdmins();
  }

  deleteAdmin(adminId: number): void {
    this.api.delete('admins/' + adminId).subscribe(
      () => {
        console.log('Admin deleted successfully');
        this.refreshAdminList(); // Refresh the list after delete
      },
      (error) => {
        console.error('Error deleting admin:', error);
      }
    );
  }

  
}
