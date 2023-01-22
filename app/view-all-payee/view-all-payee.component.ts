import { Component, OnInit } from '@angular/core';
import { Accountdetail } from '../accountdetails/Accountdetail';
import { PayeeService } from '../payee.service';
import { Payee } from './Payee';

@Component({
  selector: 'app-view-all-payee',
  templateUrl: './view-all-payee.component.html',
  styleUrls: ['./view-all-payee.component.css']
})
export class ViewAllPayeeComponent implements OnInit {

  bid:number=0;
  allPayee:Payee[]=[];
  tempPayees:Payee[]=[];
  xdata: any;
  deleted: Boolean;
  allLogin:Accountdetail;
  temp:any;

  constructor(private payeeservice:PayeeService) {
    this.temp=sessionStorage.getItem("userKey");
     this.allLogin=JSON.parse(this.temp);
   }

  ngOnInit(): void {

    console.log("loading payees");
    this.loadAllEmployees();

  }
  loadAllEmployees() {
    console.log('Load all payees');
    this.payeeservice.getPayeeService(this.allLogin).subscribe(
      (data: Payee[])=> 
      {
        this.allPayee = data;
        //this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );

  }

  /*updatePayeeArray(){
    if(this.bid==0){
      console.log("its zero "+this.bid);
      this.tempPayees=this.allPayee;
    }
    else{
      this.tempPayees=this.allPayee.filter( e=>(e.beneficiaryid== this.bid));
      console.log('Lenth of tempEmployees :'+this.tempPayees.length);
      console.log("length of all employees:"+this.allPayee.length);
    }
  }*/

  /*deletePayee(bid: number)
  {
  console.log('emp number to delete '+bid);
  this.payeeservice.deletePayeeService(bid).
  subscribe((data:any) =>
  {
  this.xdata = data;
  console.log('log is' + data);
  if(data == null ) {
  this.deleted=true;
  // alert('record has been deleted');
  this.tempPayees = this.allPayee.filter(e=>(e.beneficiaryid != bid));
  console.log('from deleteEmployee() '+ data);
  console.log(this.tempPayees);
  this.allPayee = this.tempPayees;
  console.log('Payee deleted '+bid);
  }
  }, (err) => {
  console.log(err + ' error '+this.xdata);
  });*/

  

}

