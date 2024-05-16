import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/assets/enviornment';
import { Observable } from 'rxjs';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from './employees';

@Injectable({
  providedIn: 'root',
})
export class HomedashboardService {
  baseApiUrl: string = environment.apiBaseUrl
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseApiUrl+'api/Employees')
  }
  addEmployeesData(addEmployeeRequest: Employee): Observable<any>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post(this.baseApiUrl+'api/Employees',addEmployeeRequest)
  }
  getEmployeeOnEdit(id: string): Observable<any>{
   return this.http.get<Employee>(this.baseApiUrl+'api/Employees/' + id)
  }
  updateEmployeeData(id:string, updateEmployeeRequest: Employee): Observable<any> {
    return this.http.put<Employee>(this.baseApiUrl + 'api/Employees/' + id, updateEmployeeRequest);
  }
}
