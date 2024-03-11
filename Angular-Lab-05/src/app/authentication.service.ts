import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from './account';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public accountLogin:BehaviorSubject<any> = new BehaviorSubject(null);
  
  

  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    if(localStorage.getItem("authenticationLogin") != null){
      const authenticationLogin = localStorage.getItem("authenticationLogin");
      this.accountLogin.next(authenticationLogin);
      
    }
  }


  public getAllAccountsFromDatabase():Observable<any>{
    return this._HttpClient.get("http://localhost:3000/accounts");
  }

  public postAccountToDatabase(account:Account):Observable<any>{
    return this._HttpClient.post("http://localhost:3000/accounts" , account);
  }

  public putAccountToDatabase(accountId:string , account:Account):Observable<any>{
    return this._HttpClient.put(`http://localhost:3000/accounts/${accountId}` , account);
  }

  public deleteAccountToDatabase(accountId:string):Observable<any>{
    return this._HttpClient.delete(`http://localhost:3000/accounts/${accountId}`);
  }

  public checkAuthenticationAndSeedingAdmin():void {
    this.getAllAccountsFromDatabase().subscribe((response:any[]) => {
      const admin:Account = {
        username:"Admin" , 
        email: "admin@gmail.com" , 
        password:"Admin123456$" , 
        role:"ADMIN"
      };
  
      //check is admin is already existed..!!
      var isExsited = response.some((account) => {return account.email == admin.email})
      if(response.length == 0 || !isExsited){
        this.postAccountToDatabase(admin).subscribe(() => {console.log("admin is exsisted...")})
      }
    })
  }

  public authenticationLogin(account:{email:string , password:string}):Observable<any>{

    return new Observable((subscriper) => {

    

      //check authentication crediential
    this.getAllAccountsFromDatabase().subscribe((response:any[]) => {

      //check account email and password identical
      const authenticationLogin:any = response.find((accountResponse:Account) => {
        return accountResponse.email == account.email && accountResponse.password == account.password;
      });

      if(authenticationLogin !== undefined){ //authentication is valid
        this.accountLogin.next(JSON.stringify(authenticationLogin));
        subscriper.next({authenticationValid:true , account:authenticationLogin});
      }
      else
      { //authentication is invalid
        this.accountLogin.next(null);
        subscriper.next({authenticationValid:false , account:null , message:"email or password may be incorrect..!!"});
      }
    })
    });
    
  }

  public authenticationLogout():void{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authenticationLogin");
    this.accountLogin.next(null)
    this._Router.navigate(['/login']);
  }
}
