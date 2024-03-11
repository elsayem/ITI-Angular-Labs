import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor(private _AuthenticationService:AuthenticationService , private _EmployeeService:EmployeeService){}
  public isOpen:boolean = true;
  public activeLink = "main-dashboard";
  public authenticationLogin:any;
  public changeStatusOfAside():void {
    this.isOpen = !this.isOpen;
  }

  public activeLinkChange(activeLink:string):void{
    this.activeLink = activeLink;
  }


  ngOnInit(): void {
    this._AuthenticationService.accountLogin.subscribe((response:any) => {
      this.authenticationLogin = JSON.parse(response);
    });

    this._EmployeeService.GetAllEmployeeFromDatabase().subscribe((empsResponse:any[]) => {
      const employee = empsResponse.find((employeeRes) => {return employeeRes.email == this.authenticationLogin.email});
      this.authenticationLogin.id = employee?.id;
    })
  }

}
