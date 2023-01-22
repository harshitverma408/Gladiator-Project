import { Component, OnInit } from '@angular/core';
import { Accountdetail } from '../login/Accountdetail';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  allLogin: Accountdetail ;
  temp: any;
  allAcc:Accountdetail[]=[];

  constructor(private accountservice:PayeeService) {
     this.temp=sessionStorage.getItem("userKey");
     this.allLogin=JSON.parse(this.temp);
     //sessionStorage.setItem("userKey",JSON.stringify(this.allLogin));
     //console.log(this.temp);
     //console.log(this.allLogin);
   }

  ngOnInit(): void {

    this.loadAccount();
  }
  loadAccount() {
    console.log('Load account details');
    this.accountservice.getAccountService(this.allLogin).subscribe(
      (data: Accountdetail[])=> 
      {
        this.allAcc=data;
        console.log(this.allAcc[0].cid);
        sessionStorage.setItem("userKey",JSON.stringify(this.allAcc));
        //this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );

    
  }


}



