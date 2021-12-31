import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';
import { ResponseModel } from './models/response.model';
import { AuthService } from './services/auth.service';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private transactionService: TransactionService,private authService: AuthService)
  {
    if (localStorage.getItem('authToken')) {    
      this.authService.setUserDetails();    
    } 
  }
  response:ResponseModel=new ResponseModel();
  onClickSubmit(data) {
     this.transactionService.RequestTransaction(data).subscribe((data) => {
       if(data)
       {
         var result=data.json();
      this.response=result;
    
       }

    });
 }
 checkValue(event) {
   console.log(event.keyCode )
   return (event.keyCode  == 8 || event.keyCode  == 0) ? null : event.keyCode  >= 48 && event.keyCode  <= 57
}
}
