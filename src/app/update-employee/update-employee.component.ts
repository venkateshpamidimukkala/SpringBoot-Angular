import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  id:number;
  constructor(private employeeService:EmployeeService,
    private router:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    this.employee=new Employee();

    this.id=this.router.snapshot.params['id'];

    this.employeeService.getEmployeeId(this.id).subscribe(data =>{
      console.log(data)
      this.employee=data;
    },error => console.log(error));
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee,).subscribe(data =>{
     console.log(data);
    this.employee=new Employee();
    this.goToEmployeeList();
    },error =>console.log(error)
    );
  }
  goToEmployeeList(){
    this.rout.navigate(['./employees'])
    }
    onSubmit(){
      console.log(this.employee);
      this.updateEmployee();
    }
}
