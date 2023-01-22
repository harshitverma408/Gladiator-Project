import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accountdetail } from '../accountdetails/Accountdetail';
import { CustomerDetails } from '../create-account/CustomerDetails';
import { PayeeService } from '../payee.service';
import { Account } from './Account';

@Component({
  selector: 'app-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.css']
})
export class AccountInputComponent implements OnInit {

  addAccount:Account=new Account();
  temp:any;
  custidNew:CustomerDetails=new CustomerDetails();
  constructor(private addaccount:PayeeService,private router:Router) {
    this.temp=sessionStorage.getItem("userKey");
     this.custidNew=JSON.parse(this.temp);
     console.log("Printing inside account input....")
     console.log(this.custidNew);
   }

  ngOnInit(): void {
  }

  addAcc(){
    console.log("payee getting added");
    this.addaccount.addAccountService(this.addAccount,this.custidNew).subscribe(
      (data: Account)=> 
      {
        // this.payee= new Payee();
        
        //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );


  }
  home(){
    
    this.addAcc();
    this.router.navigate(['/home']);
  }



}
