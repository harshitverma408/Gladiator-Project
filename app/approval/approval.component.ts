import { Component, OnInit } from '@angular/core';
import { PayeeService } from '../payee.service';
import { Approval } from './Approval';
import { Approvals } from './Approvals';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  allApprovals:Approvals[]=[];
  accept:Approvals=new Approvals();
  appr:Approval;

  constructor(private approvalservice:PayeeService) { }

  ngOnInit(): void {

    console.log("loading payees");
    this.loadAllApprovals();

  }
  loadAllApprovals() {
    console.log('Load all payees');
    this.approvalservice.getApprovalService().subscribe(
      (data:Approvals[])=> 
      {
        this.allApprovals = data;
        console.log(this.allApprovals);
        //this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );

  }
  approve(){
    // console.log(this.allApprovals.custId + ) ;
    this.approvalservice.approveservice(this.allApprovals[0]).subscribe(
      (data:Approvals[])=> 
      {
        // this.accept = data;
        console.log(data);

        //this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    );

  }

}
