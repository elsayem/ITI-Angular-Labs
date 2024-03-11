import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public authenticationLogin:any = null;

  constructor(private _AuthenticationService:AuthenticationService){
  }

  

  ngOnInit(): void {
    this._AuthenticationService.accountLogin.subscribe((response:any) => {
      this.authenticationLogin = JSON.parse(response);
    })
  }

  


  public logout():void{
    this._AuthenticationService.authenticationLogout();
  }


}
