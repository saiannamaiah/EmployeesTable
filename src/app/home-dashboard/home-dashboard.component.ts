import { Component } from '@angular/core';
import { HomedashboardService } from '../services/homedashboard.service';
import { FormatPipe } from '../services/format.pipe';
import { NumberMaskPipe } from '../pipes/number-mask';
import { EmailMaskPipe } from '../pipes/email-mask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css'],
  providers: [FormatPipe] // Provide the custom pipe

})
export class HomeDashboardComponent {
constructor(private homeDashboardService: HomedashboardService,
      public numberMaskPipe: NumberMaskPipe,
    public emailMaskPipe: EmailMaskPipe,
    private router: Router
){

}
ngOnInit(): void {
  this.getEmployeesDataList();
}
employeesData: any = [];

getEmployeesDataList() {

  this.homeDashboardService.getAllEmployees().subscribe(
    (data: any) => {
      if (data) {
        console.log(data)
        this.employeesData = data;
      }
    },
    (error) => {
      console.error('Error fetching employees data:', error);
      // Handle error appropriately (e.g., show error message)
    }
  );
}
navigateToHome() {
  this.router.navigate(['/home']);
}
}
