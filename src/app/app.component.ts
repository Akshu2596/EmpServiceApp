import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmpServiceApp';
  employees: Employee[] = []
  emp: Employee = {
    id: '',
    firstName:'',
    lastName:'',
    phoneNumber: '',
    department:''
  }
constructor(private employeeService: EmployeeService){


}
//how the app loads the very first time
  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees(){
    this.employeeService.getAllEmployees()
    .subscribe(
      response => {
        this.employees = response;
      }
    );
  }

  onSubmit(){
    this.employeeService.addEmployee(this.emp)
    .subscribe(
      response => {
        this.getAllEmployees();
        this.emp = {
          id: '',
          firstName:'',
          lastName:'',
          phoneNumber: '',
          department:''
        }
      }
    )

  }

  
}
