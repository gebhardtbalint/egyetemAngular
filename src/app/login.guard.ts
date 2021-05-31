import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate{

  constructor(private loginComponent: LoginComponent, public router: Router, public auth: LoginService) {
  }
  canActivate(): boolean{
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }


}
