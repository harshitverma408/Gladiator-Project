import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountstatementsComponent } from './accountstatements/accountstatements.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
//import { AddpayeeComponent } from './addpayee/addpayee.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { ImpsComponent } from './imps/imps.component';
import { ViewAllPayeeComponent } from './view-all-payee/view-all-payee.component';
import { AdminComponent } from './admin/admin.component';
import { NeftComponent } from './neft/neft.component';
import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { AccountInputComponent } from './account-input/account-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountstatementsComponent,
    DashboardComponent,
    ForgotUserIdComponent,
    HomeComponent,
    RegistrationComponent,
    SetPasswordComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
    AddpayeeComponent,
    RtgsComponent,
    ImpsComponent,
    ViewAllPayeeComponent,
    AdminComponent,
    NeftComponent,
    SessionexpiredComponent,
    FundtransferComponent,
    UserprofileComponent,
    AccountdetailsComponent,
    ApprovalComponent,
    AccountInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
