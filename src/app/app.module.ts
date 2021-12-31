import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientService } from './services/http-client.service';
import { TransactionService } from './services/transaction.service';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      { path: 'login', component: LoginComponent },
      { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [HttpClientService,TransactionService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
