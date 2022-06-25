import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmpServiceApp';

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
        console.log(response);
      }
    );
  }
}
