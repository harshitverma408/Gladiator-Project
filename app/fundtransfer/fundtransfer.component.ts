import { Component, OnInit } from '@angular/core';
import { PayeeService } from '../payee.service';
import { transaction } from '../rtgs/Transaction';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

  allfunds:transaction=new transaction();

  constructor(private fundservice :PayeeService) { }

  ngOnInit(): void {
  }

  

}
