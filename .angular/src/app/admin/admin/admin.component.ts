import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  
  editForm: any;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const adminId = this.route.snapshot.params['id'];
    if (adminId) {
      this.loadAdminData(adminId);
    }
  }
  
  loadAdminData(adminId: number): void {
    this.api.get("admins/" + adminId).subscribe((admin: any) => {
        this.editForm.patchValue(admin);
      },
      (error) => {
        console.error('Error fetching admin details:', error);
      }
    );
  }

  save(adminData: any): void {
    const adminId = this.route.snapshot.params['id'];

    if (adminId) {
      this.api.put("admins/" + adminId, adminData).subscribe(
        () => {
          console.log('Admin updated successfully');
          this.router.navigate(['/admin/admins']);
        },
        (error) => {
          console.error('Error updating admin:', error);
        }
      );
    } else {
      this.api.post('admins/', adminData).subscribe(
        () => {
          console.log('Admin added successfully');
          this.router.navigate(['/admin/admins']);
        },
        (error) => {
          console.error('Error adding admin:', error);
        }
      );
    }
  }

  togglePassword(): void {
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
}
