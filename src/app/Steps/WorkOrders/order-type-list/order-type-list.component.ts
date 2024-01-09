import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from "../../../Services/common.service";
import {DataService} from "../../../Services/data.service";

@Component({
  selector: 'app-order-type-list',
  templateUrl: './order-type-list.component.html',
  styleUrls: ['./order-type-list.component.css']
})
export class OrderTypeListComponent implements OnInit {
  @Input() isVisible = false;
  orderType: {type:string, description:string}[] = [];
  constructor(private commonService: CommonService, private getData: DataService) { }

  ngOnInit(): void {
    this.orderType = this.getData.getOrderType();
    this.commonService.aClickedEvent
      .subscribe((data:boolean) => {
        this.isVisible = data;
      });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
