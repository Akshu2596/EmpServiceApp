import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  serviceUrl ='https://localhost:5001/api/employee'
  constructor(private http: HttpClient) { }

  //Get all employees

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee []>(this.serviceUrl);
  }

  addEmployee(emp:Employee): Observable<Employee>{
    emp.id = '0'
    return this.http.post<Employee>(this.serviceUrl, emp)
  }

  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.serviceUrl + '/' + id)
  }
  updateEmployee(emp: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.serviceUrl +'/'+ emp.id, emp)

  }
}
