import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayeeService } from '../payee.service';
import { CustomerDetails } from './CustomerDetails';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  


  cust: CustomerDetails = new CustomerDetails();
  custidDetails:CustomerDetails=new CustomerDetails();

  constructor(private addCust:PayeeService,private router:Router) { }

  ngOnInit(): void {
  }
  
  
  

  addCustomer(){
    console.log(this.cust.title);

    console.log("payee getting added");
    this.addCust.addCustomerService(this.cust).subscribe(
      (data: CustomerDetails)=> 
      {
        
        console.log(data);
        this.custidDetails=data;
        sessionStorage.setItem("userKey",JSON.stringify(this.custidDetails));

        // this.payee= new Payee();
        
        //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );


  }

  home(){
    this.addCustomer();
    this.router.navigate(['/accountinput']);
  }

}

