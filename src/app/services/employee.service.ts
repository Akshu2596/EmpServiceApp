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
}
