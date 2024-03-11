import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Account } from '../account';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{


  public employeesList:any[] = [];
  public dublicatedEmail:string = "";
  public updated:boolean = false;
  public updatedEmployee:any = null;
  public deletedEmployee:any = null;

  constructor(private _HttpClient:HttpClient , private _EmployeeService:EmployeeService , private _AuthenticationService:AuthenticationService){}

  ngOnInit(): void {
    this._EmployeeService.GetAllEmployeeFromDatabase().subscribe((response) => {
      this.employeesList = response;
    })
  }

  public employeesForm = new FormGroup({
    id: new FormControl(''),
    username: new FormControl('' , [Validators.required , Validators.minLength(4)]),
    email: new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(6)]),
    age: new FormControl('' , [Validators.required , Validators.min(25) , Validators.max(60)]),
    salary: new FormControl('' , [Validators.required , Validators.min(6000) , Validators.max(100000)]),
    address: new FormControl('' , [Validators.required]),
  })

  public onSubmit(employeesForm:FormGroup){
    if(employeesForm.valid){
      if(this.updated){
        console.log(employeesForm.value);
        this._EmployeeService.putEmployeeToDatabase(employeesForm.value.id , employeesForm.value).subscribe(() => {
          this._AuthenticationService.getAllAccountsFromDatabase().subscribe((response:Account[]) => {
            const account:Account|undefined = response.find((accountRes) => {return accountRes.email == this.updatedEmployee.email});
            console.log(account);
            if(account != undefined && account.id != undefined){
              //Code
              account.email = employeesForm.value.email;
              account.username = employeesForm.value.username;
              account.password = employeesForm.value.password;
              
              this._AuthenticationService.putAccountToDatabase(account.id , account).subscribe(() => {
                this._EmployeeService.GetAllEmployeeFromDatabase().subscribe((response) => {
                  this.employeesList = response;
                });
              })
            }

          });
        })
      }
      else
      {
        //check email duplication
        this._EmployeeService.GetAllEmployeeFromDatabase().subscribe((response:any[]) => {
          const isExisted = response.some((employee) => {return employee.email == employeesForm.value.email});
          if(isExisted){ //email duplication
            this.dublicatedEmail = "email is already existed ..!!";
          }
          else
          {
            const currentObject = employeesForm.value;
            delete currentObject.id;
            this._EmployeeService.postEmployeeToDatabase(currentObject).subscribe(() => {

              const currentAccout:Account = {username:currentObject.username , email:currentObject.email , password:currentObject.password , role: "USER"};

              this._AuthenticationService.postAccountToDatabase(currentAccout).subscribe(() => {
                this._EmployeeService.GetAllEmployeeFromDatabase().subscribe((response) => {
                  this.employeesList = response;
                  employeesForm.reset();
                })
              })

            });
          }
        })
      
      }
    }
  }

  public UpdateEmployee(employeeid:string){

    this._EmployeeService.getEmployeeById(employeeid).subscribe((response:any) => {
      this.employeesForm.patchValue({
        id: response.id,
        username: response.username,
        email: response.email,
        password: response.password,
        age: response.age.toString(),
        salary: response.salary.toString(),
        address: response.address
      });


      this.updated = true;
      this.updatedEmployee = response;
    })

  }

  public DeleteEmployee(employeeid:string){
    this._EmployeeService.getEmployeeById(employeeid).subscribe((response:any) => {
      this.deletedEmployee = response;
      this._EmployeeService.deleteEmployeeToDatabase(employeeid).subscribe(() => {
        this._AuthenticationService.getAllAccountsFromDatabase().subscribe((response:Account[]) => {
          const account = response.find((accountRes) => {return accountRes.email == this.deletedEmployee.email});
          if(account != undefined && account.id != undefined) {
            this._AuthenticationService.deleteAccountToDatabase(account.id).subscribe(() => {
              this._EmployeeService.GetAllEmployeeFromDatabase().subscribe((response) => {
                this.employeesList = response;
              })
            })
          }
        })
      })
    })

  }


}
