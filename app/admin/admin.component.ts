import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


 adminid:number ;
 adminpw:String='';
  userNotFoundMessage: string | undefined;

  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  adminLogin(){
    if(this.adminid==55599 && this.adminpw=='Admin@123'){
      alert("Admin logged in");
      this.router.navigate(['/approval']);
    }
    else{
       this.userNotFoundMessage="Admin Not Found";
    }

   
  }

}
