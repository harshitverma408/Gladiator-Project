import { Component, OnInit } from '@angular/core';
import { PayeeService } from '../payee.service';
import { Accountdetail } from './Accountdetail';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  
  allAcc:Accountdetail[]=[];
  temp:any;
  myUser:Accountdetail;
  allLogin:Accountdetail;

  constructor(private accountservice:PayeeService) {
    this.temp=sessionStorage.getItem("userKey");
     this.allLogin=JSON.parse(this.temp);
    console.log("Printing account details...")
    // console.log(this.myUser.userid);
    // console.log(this.myUser);

   }

  ngOnInit(): void {

    this.loadAccount();
  }
  loadAccount() {
    console.log('Load account details');
    this.accountservice.getAccountService(this.allLogin[0]).subscribe(
      (data: Accountdetail[])=> 
      {
        this.allAcc = data;
        console.log(this.allAcc);
        //this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );

    
  }

}
