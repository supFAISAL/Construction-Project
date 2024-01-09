import {Component, Input, OnInit} from '@angular/core';
import {WorkData} from "../../Models/work-data";

@Component({
  selector: 'app-InfoModal',
  templateUrl: './InfoModal.component.html',
  styleUrls: ['./InfoModal.component.css']
})
export class InfoModalComponent implements OnInit {
  @Input() public dataInfo : WorkData;

  modalVisibility = false
  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.modalVisibility = true;
  }

  handleOk(): void {
    this.modalVisibility = false;
  }

  handleCancel(): void {
    this.modalVisibility = false;
  }

}
