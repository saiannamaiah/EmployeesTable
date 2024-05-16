import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomedashboardService } from '../services/homedashboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../services/employees';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent {

  public editEmployee: FormGroup;
  employeeId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private homedashboardservice: HomedashboardService,
    private fb: FormBuilder,
    private router: Router,

  ) {
    this.editEmployee = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get('id');
      if (this.employeeId) {
        this.homedashboardservice.getEmployeeOnEdit(this.employeeId).subscribe(response => {
          this.editEmployee.patchValue(response);
        });
      }
    });
  }
 
  saveEmployeeDataOnEdit() {
    if (this.editEmployee.valid && this.employeeId) {
      const updatedEmployee: Employee = this.editEmployee.value;
      this.homedashboardservice.updateEmployeeData(this.employeeId, updatedEmployee).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error updating employee data:', err);
        }
      });
    } else {
      this.editEmployee.markAllAsTouched();
    }
  }

  
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
