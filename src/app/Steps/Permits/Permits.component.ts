import { PermitsRequestsService } from './../../Services/Permits/permitsRequests.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-Permits',
  templateUrl: './Permits.component.html',
  styleUrls: ['./Permits.component.css']
})
export class PermitsComponent implements OnInit {
  Requests?:any
  newOrderForm: FormGroup;   
  constructor(private requests:PermitsRequestsService,private fb: FormBuilder) { }

  ngOnInit() {
    this.newOrderForm = this.fb.group ({
      workOrderNumber: new FormControl(null),
      workOrderType: new FormControl(null),
      location: new FormControl(null),
      department: new FormControl(null),
      contractType: new FormControl(null),
      creationDate: new FormControl(null),
      moveTo: new FormControl(null),
      priceCloseup: new FormControl(null),
    })
    this.requests.pullworkOrderData()
    this.Requests = this.requests.Requests
    console.log(this.Requests)
  }

  openlocation(location: any){
    window.open(location, "_blank")
  }
}
