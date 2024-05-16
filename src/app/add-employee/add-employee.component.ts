import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomedashboardService } from '../services/homedashboard.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  public addEmployee: FormGroup;
  addclient: any;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private homedashboardEmploee: HomedashboardService,
  ) {
    this.addEmployee = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  saveEmployeeData() {
    if (this.addEmployee.valid) {
      this.homedashboardEmploee
        .addEmployeesData(this.addEmployee.value)
        .subscribe({
          next: (data: any) => {
            if (data.status) {
            }
            this.router.navigate(['/home']);
          },
        });
    } else {
      this.addEmployee.markAllAsTouched();
    }
    console.log(this.addEmployee);
  }
}
