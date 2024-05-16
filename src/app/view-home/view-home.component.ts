import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent {
  constructor(private router: Router) { }

  navigateToAddEmployee() {
    this.router.navigate(['/employee/add']);
  }

  navigateToViewEmployees() {
    this.router.navigate(['/home-dashboard']);
  }
  onBoxHover(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#0056b3'; // Darker blue on hover
  }

  onBoxLeave(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.backgroundColor = '#007bff'; // Restore original color on mouse leave
  }

}
