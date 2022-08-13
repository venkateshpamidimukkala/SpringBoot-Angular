import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees:Employee[];

  constructor(private employeeservice:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  //   this.employees=[
  //     {
  //       id:1,
  //       firstname:"Venkatesh",
  //       lastname:"P",
  //       emailid:"Venkatesh@gmail.com"
  //   },
  //   {
  //     id:2,
  //     firstname:"Venkatesh",
  //     lastname:"P",
  //     emailid:"Venkatesh@gmail.com"
  //   }
  // ];
  }
  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data =>{
      this.employees=data;
    });
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);

  }
  deleteEmployee(id:number){
    this.employeeservice.deleteEmployee(id).subscribe(data =>{
      console.log(data)
     this.getEmployees();
    });
}
employeeDetails(id:number){
  this.router.navigate(['employee-details',id]);

}
}
