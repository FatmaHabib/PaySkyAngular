import { Component, OnInit } from '@angular/core';    
import { ActivatedRoute, Router } from '@angular/router';    
import { first } from 'rxjs/operators';    
import { AuthService } from '../services/auth.service';    
    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    
export class LoginComponent implements OnInit {    
    
  loading = false;    
  submitted = false;    
  returnUrl: string;    
    
  constructor(    
    private router: Router,    
    private authService: AuthService) {
        debugger;
     }    
    
  ngOnInit() { 
      debugger;   
       
  }    
    
  loginForm= {"password":true,"username":true};
  onSubmit(data) {    
    this.submitted = true;    
     debugger;
     if(!data.password)
     {
         this.loginForm.password=false;
         return ;
     }
     if(!data.username)
     {
         this.loginForm.username=false;
         return ;
     }
    this.loading = true;    
    this.authService.login(data)
   
    
       
  }    
}