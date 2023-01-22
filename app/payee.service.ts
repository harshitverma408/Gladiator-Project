import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payee } from './addpayee/Payee';
import { Transaction } from './accountstatements/Transaction';
import { HttpClient } from '@angular/common/http';
import { userprofile } from './userprofile/userprofile';
import { Accountdetail } from './login/Accountdetail';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { CustomerDetails } from './create-account/CustomerDetails';
import { Approvals } from './approval/Approvals';
//import { transaction } from './rtgs/transaction';
import { Account } from './account-input/Account';
import { transaction } from './rtgs/Transaction';
import { Approval } from './approval/Approval';

//import { Accountdetail } from './login/Accountdetail';


@Injectable({
  providedIn: 'root'
})
export class PayeeService {


    postPayee = 'addPayee/10008'
  baseURL: string = 'http://localhost:8090/payee/addPayee/'
  getURL:string='http://localhost:8090/payee/getPayee/'
  transURL:string='http://localhost:8090/transaction/getTrans/'
  custURL:string='http://localhost:8090/customer/getCustomer/'
  loginURL:string='http://localhost:8090/loginpage/login/'
  accURL:string='http://localhost:8090/account/getAccountOnAccno/'
  custAddURL:string='http://localhost:8090/customer/addCust'
  setpwURL='http://localhost:8090/customer/login/'
  approveURL:string ='http://localhost:8090/approval/approveAccount'
  approvalURL:string ='http://localhost:8090/approval/accToApprove'
  fundurl='http://localhost:8090/transfer/addFund/'
  addAccountURL:string = 'http://localhost:8090/account/addAccount' 
  ans:string;
  
  constructor(private myhttp: HttpClient) { }
  //insert payee
  addPayeeService(payee:Payee,allLogin:Accountdetail): Observable<any> {
    
    console.log(payee);
    return this.myhttp.post<any>(this.baseURL+'/'+allLogin[0].accountnumber,payee);
     }
     //get payees
     getPayeeService(allLogin:Accountdetail): Observable<Payee[]> {
       console.log("getPayeeservice called..")
      return this.myhttp.get<Payee[]>(this.getURL+'/'+allLogin[0].accountnumber);
}
  //getaccountstatement
      getTransactionService(allLogin:Accountdetail): Observable<Transaction[]> {
      console.log("getPayeeservice called..")
      console.log(allLogin[0].accountnumber);
      return this.myhttp.get<Transaction[]>(this.transURL+'/'+allLogin[0].accountnumber);
}
  // deletePayeeService(empNo : number) : Observable<string> {//eno is copied here to empNo
  //   return this.myhttp.delete<string>(this.baseURL+"deleteEmp/"+empNo);
  // }

  //getCustomerDetails
  getCustomerService(allAcc:Accountdetail):Observable<userprofile>
{
  console.log("getCustomer called...");
  console.log(allAcc[0].custId);
  return this.myhttp.get<userprofile>(this.custURL+'/'+allAcc[0].custId);
}

getLoginService(allLogin:Accountdetail):Observable<any>{
  console.log("getLoginService called...");
  //console.log(allLogin);
    return this.myhttp.get<any>(this.loginURL+allLogin.userid+'/'+allLogin.loginpassword);
}
getAccountService(allLogin:Accountdetail):Observable<Accountdetail[]>
{
  console.log("getAccount called...");
  console.log(allLogin.accountnumber);
  return this.myhttp.get<Accountdetail[]>(this.accURL+'/'+allLogin.accountnumber);
}
addCustomerService(cust:CustomerDetails): Observable<any> {
    
  console.log(cust);
  console.log("post is working");
  return this.myhttp.post<any>(this.custAddURL,cust);
  // return this.myhttp.post('${this.baseURL}',payee);
  // return this.http.post(`${this.baseUrl}`+'/addquestion', addQuestion)
  
}
forgotPassword(loginpassword,accountnumber):Observable<any>{
  console.log("getpasswordService called...");
  //console.log(allLogin);
  //console.log(this.setpwURL+loginpassword+'/'+accountnumber);
   this.ans=loginpassword+'/'+accountnumber;
   console.log(this.ans);
    return this.myhttp.get<any>(this.setpwURL+loginpassword+'/'+accountnumber);
}

getApprovalService(): Observable<Approvals[]> {
  console.log("getPayeeservice called..")
 return this.myhttp.get<Approvals[]>(this.approvalURL);
}

approveservice(allApprovals:Approvals): Observable<any> {
  
  console.log("approve service called..")
  console.log(allApprovals.custId);
  //console.log(appr);
   
 return this.myhttp.post<any>(this.approveURL+'/'+allApprovals.custId+'/'+55599,{});
}



fundtransferservice(allfunds:transaction,allLogin:Accountdetail): Observable<any> {
  
  console.log(allfunds);
  return this.myhttp.post<any>(this.fundurl+'/'+allfunds.toAccountNumber+'/'+allfunds.fromAccountNumber,allfunds);
   }

   addAccountService(addAccount:Account,custidDetails:CustomerDetails): Observable<any> {
    
    console.log(addAccount);
    console.log("account  is working");
    console.log(custidDetails.custid);

    return this.myhttp.post<any>(this.addAccountURL+'/'+custidDetails.custid,addAccount);
    // return this.myhttp.post('${this.baseURL}',payee);
    // return this.http.post(`${this.baseUrl}`+'/addquestion', addQuestion)

}

}


