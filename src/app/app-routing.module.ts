import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ViewHomeComponent,
  },
  {
    path: 'home-dashboard',
    component: HomeDashboardComponent,
  },
  {
    path: 'employee/add',
    component: AddEmployeeComponent,
  },
  {
    path: 'employee/edit/:id',
    component: EditEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
