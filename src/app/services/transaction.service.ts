import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TransactionModel } from "app/models/transaction.model";
import { HttpClientService } from "./http-client.service";

@Injectable()
  export class TransactionService {
    constructor(private http: HttpClientService) {
     
    }

    RequestTransaction(transactionDataModel: TransactionModel): Observable<any> {
        debugger;
        return this.http.post(
          "Request",
         transactionDataModel
        );
      }
  }