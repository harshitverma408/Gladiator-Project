import { Component, OnInit } from '@angular/core';
import { Accountdetail } from '../accountdetails/Accountdetail';
import { PayeeService } from '../payee.service';
import { Payee } from './Payee';

@Component({
  selector: 'app-addpayee',
  templateUrl: './addpayee.component.html',
  styleUrls: ['./addpayee.component.css']
})
export class AddpayeeComponent implements OnInit {

  allLogin:Accountdetail;
  temp:any

  constructor(private addBeneficiary:PayeeService) {
    this.temp=sessionStorage.getItem("userKey");
    this.allLogin=JSON.parse(this.temp);
   }

  payee: Payee = new Payee();

  ngOnInit(): void {

    
}

addPayee(){
  console.log("payee getting added");
  this.addBeneficiary.addPayeeService(this.payee,this.allLogin).subscribe(
    (data: Payee)=> 
    {
      // this.payee= new Payee();
      
      //copied into a temp array also
    }, 
    (err) => {
      console.log(err);
    }
  );
  }
}




