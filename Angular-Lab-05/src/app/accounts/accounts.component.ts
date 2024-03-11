import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../account';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{


  public accountsList:any[] = [];
  public dublicatedEmail:string = "";
  constructor(private _HttpClient:HttpClient , private _AuthenticationService:AuthenticationService){}

  ngOnInit(): void {
    this._AuthenticationService.getAllAccountsFromDatabase().subscribe((response) => {
      console.log(response);
      this.accountsList = response;
    })
  }

  public adminForm = new FormGroup({
    username: new FormControl(null , [Validators.required , Validators.minLength(4)]),
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.minLength(6)]),
  })

  public onSubmit(adminForm:FormGroup){
    if(adminForm.valid){
      //check email duplication
      this._AuthenticationService.getAllAccountsFromDatabase().subscribe((response:any[]) => {
        const isExisted = response.some((account) => {return account.email == adminForm.value.email});
        if(isExisted){ //email duplication
          this.dublicatedEmail = "email is already existed ..!!";
        }
        else
        {
          const currentObject = adminForm.value;
          currentObject.role = "ADMIN";
          this._AuthenticationService.postAccountToDatabase(currentObject).subscribe(() => {

            this._AuthenticationService.getAllAccountsFromDatabase().subscribe((response) => {
              this.accountsList = response;
              adminForm.reset();
            })

          });
        }
      })
      
    }
  }

  public UpdateAccount(accountId:string){

  }

  public DeleteAccount(accountId:string){

  }
}
