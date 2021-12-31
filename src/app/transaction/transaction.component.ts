import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';
import { ResponseModel } from 'app/models/response.model';
import { TransactionService } from 'app/services/transaction.service';

@Component({
  selector: 'app-trans',
  templateUrl: './transaction.component.html'
})
export class TransactionComponent {
  constructor( private transactionService: TransactionService)
  {
    
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
