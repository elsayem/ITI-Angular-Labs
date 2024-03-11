import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const authenticationGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const _AuthenticationService = inject(AuthenticationService);
  const _Router = inject(Router);
  let isActivated:boolean = true;
  _AuthenticationService.accountLogin.subscribe((response) => {
    const account = JSON.parse(response);
    if(account != null){
      isActivated = true;
      return true;
    }
    else{
      _Router.navigate(["/login"]);
      isActivated = false;
      return false;
    }
  });

  return isActivated;

};
