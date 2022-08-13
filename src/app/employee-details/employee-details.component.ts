import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id:number;
  employee:Employee;

  constructor(private router:ActivatedRoute,private employeeServices:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeServices.getEmployeeId(this.id).subscribe(data =>{
      this.employee=data
    })
  }

}
