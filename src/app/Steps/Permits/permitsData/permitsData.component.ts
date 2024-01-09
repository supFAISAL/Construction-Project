import { Component, Input, OnInit } from '@angular/core';
import { WorkData } from 'src/app/Models/work-data';

@Component({
  selector: 'app-permitsData',
  templateUrl: './permitsData.component.html',
  styleUrls: ['./permitsData.component.css']
})
export class PermitsDataComponent implements OnInit {
  @Input() public dataInfo : WorkData;
  permitsData?:any[]
  constructor() { }

  ngOnInit() {
    this.permitsData = this.dataInfo.permits
    console.log(this.permitsData)
  }

}
