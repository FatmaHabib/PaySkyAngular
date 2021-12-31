import { Injectable } from '@angular/core';    
import { BehaviorSubject } from 'rxjs';    
import { map } from 'rxjs/operators';    
import { Router } from '@angular/router';    
import { UserModel } from 'app/models/user.model';
import { HttpClientService } from './http-client.service';
@Injectable()    
  export class AuthService {    
      
    userData = new BehaviorSubject<UserModel>(new UserModel());    
    constructor(private http: HttpClientService, private router: Router) { }    
      
    login(userDetails) {    
      return this.http.post('login', userDetails)    
        .subscribe((data) => {    
            debugger;
            if (data.json().token)
            {
          localStorage.setItem('authToken', data.json().token); 
          console.log(data.json().token) 
          const returnUrl = "transaction" || '/';    
          this.router.navigate([returnUrl]);  
          this.setUserDetails();
 
            }   
            else
             alert(data.json().message);
          // return data;    
        });    
    }    
      
    setUserDetails() {
      debugger;    
      if (localStorage.getItem('authToken')) {    
        const userDetails = new UserModel();    
        const decodeUserDetails = JSON.parse(window.atob(localStorage.getItem('authToken').split('.')[1]));    
      
        userDetails.Username = decodeUserDetails.sub;    
        userDetails.isLoggedIn = true;    
      
        this.userData.next(userDetails);  
      }    
    }    
      
    logout() {    
      localStorage.removeItem('authToken');    
      this.router.navigate(['/login']);    
      this.userData.next(new UserModel());    
    } 
}