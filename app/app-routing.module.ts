import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInputComponent } from './account-input/account-input.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AccountstatementsComponent } from './accountstatements/accountstatements.component';
import { AddpayeeComponent } from './addpayee/addpayee.component';
import { AdminComponent } from './admin/admin.component';
import { ApprovalComponent } from './approval/approval.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { HomeComponent } from './home/home.component';
import { ImpsComponent } from './imps/imps.component';
import { LoginComponent } from './login/login.component';
import { NeftComponent } from './neft/neft.component';
import { RegistrationComponent } from './registration/registration.component';
import { RtgsComponent } from './rtgs/rtgs.component';
import { SessionexpiredComponent } from './sessionexpired/sessionexpired.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewAllPayeeComponent } from './view-all-payee/view-all-payee.component';

const routes: Routes = [
  {path : '',component: HomeComponent},
  {path:'home',component:HomeComponent},
  {path : 'login',component: LoginComponent},
  {path : 'registration',component : RegistrationComponent},
  {path:'create-account',component: CreateAccountComponent},
  {path : 'forgot-password',component : ForgotPasswordComponent},
  {path : 'dashboard',component : DashboardComponent},
  {path : 'accountstatement',component : AccountstatementsComponent},
  {path : 'fundtransfer' , component : FundtransferComponent},
  {path : 'rtgs' ,component : RtgsComponent},
  {path : 'neft' ,component : NeftComponent},
  {path : 'imps' ,component : ImpsComponent},
  {path:'userprofile',component: UserprofileComponent},
  {path:'addpayee',component:AddpayeeComponent},
  {path:'viewallpayees',component:ViewAllPayeeComponent},
  {path:'accountdetails',component:AccountdetailsComponent},
  {path:'adminLogin',component:AdminComponent},
  {path:'approval',component:ApprovalComponent},
  {path:'accountinput',component:AccountInputComponent},
  {path:'sessionexpired',component:SessionexpiredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
