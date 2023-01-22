import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payee } from '../addpayee/Payee';
import { Accountdetail } from '../login/Accountdetail';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  accountnumber:number;
  loginpassword:string;
  password:Accountdetail=new Accountdetail();

  constructor(private passwordservice:PayeeService,private router:Router) { }

  ngOnInit(): void {
  }

  forgotpassword(loginpassword,accountnumber){
    console.log("inside authenticate...")
    console.log(this.accountnumber);
    console.log(this.loginpassword);
    this.passwordservice.forgotPassword(loginpassword,accountnumber).subscribe(
      ( data:Accountdetail)=>
      {

        console.log(data);
        if(data==null){
       
        console.log("Response received");
        alert("Your password has been reset");
         this.router.navigate(['/login']);
        }else{
          console.log("invalid user credentials");
        } 
         
       },
       (err)=>{
        console.log(err);
       }
    );
    }

  }


      
       
        
        
         
         
         
         
         
    
     
  
          //copied into temp array
     
  
    



