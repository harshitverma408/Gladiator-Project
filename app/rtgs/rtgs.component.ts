import { Component, OnInit } from '@angular/core';
import { Accountdetail } from '../accountdetails/Accountdetail';
import { PayeeService } from '../payee.service';
import { transaction } from './Transaction';

@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent implements OnInit {

  allfunds:transaction=new transaction();
  allLogin:Accountdetail;
  temp:any;
  constructor(private fundservice:PayeeService) { 
    this.temp=sessionStorage.getItem("userKey");
     this.allLogin=JSON.parse(this.temp);
  }

  ngOnInit(): void {
  }

  fundtransfer(){
    this.fundservice.fundtransferservice(this.allfunds,this.allLogin).subscribe(
      
        (data: transaction)=> 
        {
          //this.alltrans = data;
           //copied into a temp array also
           alert("Fund transferred");
        }, 
        (err) => {
          console.log(err);
        }
      );
    
    }

}
