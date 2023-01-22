import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { PayeeService } from '../payee.service';
import { Accountdetail } from './Accountdetail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allLogin: Accountdetail=new Accountdetail();
  userid: String;
  loginpassword:String;
  logincheck:boolean;

  constructor(private loginservice:PayeeService,private router:Router) { }

  ngOnInit(): void {
    //console.log("authenticating..");
    //this.authenticate(userid,login);
  }
  authenticate(){
    console.log("inside authenticate...")
    this.loginservice.getLoginService(this.allLogin).subscribe(
      ( data:Accountdetail)=>
      {
        console.log("Printing data")
        console.log(data);
       if(data.toString()!=null){
        //  this.logincheck=true;
        //  console.log(this.logincheck);
         console.log("Printing acc details");
         this.allLogin=data;
         console.log(this.allLogin);
         sessionStorage.setItem("userKey",JSON.stringify(this.allLogin));
         this.router.navigate(['/dashboard']);
         
       }
       else if(data==null){
         alert("Invalid Credentials");
    
       }
       
        //this.allLogin = data;
        //console.log(this.allLogin);
        // console.log("Response received");
         
         
         //console.log("navigating");
         
         
    },
     
  
          //copied into temp array
      (err)=>{
          console.log(err);
      }
    );
    
  }
  gotodashboard(){
    //this.authenticate();
    
    }
  





    //this.router.navigate(['/dashboard'])
  }
  


