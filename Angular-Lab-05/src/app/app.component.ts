import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({ //decorator contain meta data for component.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //app component
  title = 'angularW3_Project';

  public authenticationLogin:any = null;

  constructor(private _AuthenticationService:AuthenticationService){
  }

  

  ngOnInit(): void {
    this._AuthenticationService.accountLogin.subscribe((response:any) => {
      this.authenticationLogin = response;
    })
  }

  

}
