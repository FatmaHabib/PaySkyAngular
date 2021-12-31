import { Injectable } from '@angular/core';    
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';    
import { Observable } from 'rxjs';    
import { AuthService } from '../services/auth.service';    
import { UserModel } from 'app/models/user.model';  
    
@Injectable()    
export class AuthGuard implements CanActivate {    
  userDataSubscription: any;    
  userData = new UserModel();    
  constructor(private router: Router, private authService: AuthService) {    
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {    
      this.userData = data;    
    });    
  }    
  canActivate(    
    next: ActivatedRouteSnapshot,    
    state: RouterStateSnapshot) {    
  
    debugger;
    if(localStorage.getItem('authToken'))
    {
        return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });    
    return false;    
  }    
} 