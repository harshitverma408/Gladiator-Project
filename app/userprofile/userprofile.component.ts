import { Component, OnInit } from '@angular/core';
import { Accountdetail } from '../accountdetails/Accountdetail';
import { CustomerDetails } from '../create-account/CustomerDetails';
import { PayeeService } from '../payee.service';
import { userprofile } from './userprofile';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  allCust:userprofile=new userprofile();
  allAcc:Accountdetail;
  temp:any;
  getCust:CustomerDetails;

  constructor(private customerservice:PayeeService) { 
    this.temp=sessionStorage.getItem("userKey");
    this.allAcc=JSON.parse(this.temp);
  }

  ngOnInit(): void {

    console.log("loading customers");
    this.loadAllCustomers();

  }
  loadAllCustomers() {
    console.log('Load all customers');
    this.customerservice.getCustomerService(this.allAcc).subscribe(
      (data: userprofile)=> 
      {
        console.log(data);
        this.allCust = data;
        console.log(this.allCust);
        //this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );

  }

}
