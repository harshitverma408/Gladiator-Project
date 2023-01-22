import { Component, OnInit } from '@angular/core';
import { Accountdetail } from '../accountdetails/Accountdetail';
import { PayeeService } from '../payee.service';
import { Transaction } from './Transaction';

@Component({
  selector: 'app-accountstatements',
  templateUrl: './accountstatements.component.html',
  styleUrls: ['./accountstatements.component.css']
})
export class AccountstatementsComponent implements OnInit {

  allTransaction:Transaction[]=[];
  temp:any;
  allLogin:Accountdetail;

  constructor(private transactionservice:PayeeService) {
    this.temp=sessionStorage.getItem("userKey");
     this.allLogin=JSON.parse(this.temp);
    
   }

  ngOnInit(): void {

    console.log("loading payees");
    this.loadAllEmployees();

  }
  loadAllEmployees() {
    console.log('Load all transactions');
    this.transactionservice.getTransactionService(this.allLogin).subscribe(
      (data: Transaction[])=> 
      {
        this.allTransaction = data;
        //this.tempEmployees = data; //copied into a temp array also

        console.log(this.allTransaction);
      }, 
      (err) => {
        console.log(err);
      }
    );

  }


}
