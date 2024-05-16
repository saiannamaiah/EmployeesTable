import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatPipe } from './services/format.pipe';
import { EmailMaskPipe } from './pipes/email-mask';
import { NumberMaskPipe } from './pipes/number-mask';
import { DatePipe } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    FormatPipe ,
    EmailMaskPipe,
    NumberMaskPipe,
    AddEmployeeComponent,
    ViewHomeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    
    

  ],
  providers: [EmailMaskPipe, NumberMaskPipe, DatePipe],
  bootstrap: [AppComponent],
  exports: [
    EmailMaskPipe,
    NumberMaskPipe,
  ],
})
export class AppModule { }
