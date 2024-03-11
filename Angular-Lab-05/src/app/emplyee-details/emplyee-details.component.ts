import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplyee-details',
  templateUrl: './emplyee-details.component.html',
  styleUrls: ['./emplyee-details.component.css']
})
export class EmplyeeDetailsComponent implements OnInit{

  public employeeId:string = "";
  public employee:any;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _EmployeeService:EmployeeService){
    
  }
  ngOnInit(): void {
    this.employeeId = this._ActivatedRoute.snapshot.params['id'];
    this._EmployeeService.getEmployeeById(this.employeeId).subscribe((response) => {

      this.employee = response;
      console.log(response);

    });
  }
}
