import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public messageError:string = "";

  constructor(private _EmployeeService:EmployeeService , private _AuthenticationService:AuthenticationService, private _Router:Router){}

  ngOnInit(): void {
    this._AuthenticationService.checkAuthenticationAndSeedingAdmin();
  }
  

  public loginForm = new FormGroup({
    email : new FormControl(null , [Validators.required]),
    password : new FormControl(null , [Validators.required]),
  });

  public onSubmit(loginForm:FormGroup):void {
    const currentObject = loginForm.value;
    this._AuthenticationService.authenticationLogin(currentObject).subscribe((response:any) => {
      //check authentication valid
      if(response.authenticationValid){
        if(response.account.role == "USER")
        {
          //store access token in localStorage
          localStorage.setItem("accessToken" , `applicationisloginby${response.account.email}`);
          localStorage.setItem("authenticationLogin", JSON.stringify({id: response.account.id , email:response.account.email , username:response.account.username ,role: response.account.role}));
          
          this._EmployeeService.GetAllEmployeeFromDatabase().subscribe((empsResponse:any[]) => {
            const employee = empsResponse.find((employeeRes) => {return employeeRes.email == response.account.email});
            this._Router.navigate(['/employeedetails' , employee.id]);
          })
        }
        else
        {
          //store access token in localStorage
          localStorage.setItem("accessToken" , `applicationisloginby${response.account.email}`);
          localStorage.setItem("authenticationLogin", JSON.stringify({id: response.account.id , email:response.account.email , username:response.account.username ,role: response.account.role}));
          this._Router.navigate(['/home']);
        }
      }
      else
      {
        this.messageError = response.message;
      }
    })
  }

}


