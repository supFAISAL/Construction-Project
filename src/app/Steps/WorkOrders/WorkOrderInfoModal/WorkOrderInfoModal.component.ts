import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WorkData} from "../../../Models/work-data";
import {MapInfoWindow} from "@angular/google-maps";

@Component({
  selector: 'app-WorkOrderInfoModal',
  templateUrl: './WorkOrderInfoModal.component.html',
  styleUrls: ['./WorkOrderInfoModal.component.css']
})
export class WorkOrderInfoModalComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;
  @Input() public dataInfo : WorkData;
  markers: Array<any> = [];
  zoom = 15
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {

    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
  }
  constructor() { }

  ngOnInit() {
    const splitted = this.dataInfo.location.split(',', 2);
    this.markers.push({
      position: {lat: Number(splitted[0]), lng: Number(splitted[1])},
      label: {color: 'black', text: 'Marker label ' + (this.markers.length + 1)},
      title: 'Marker title ' + (this.markers.length + 1),
    });
    this.center = {lat: Number(splitted[0]), lng: Number(splitted[1])}
    console.log(this.center);
  }

  openInfo() {
    const splitted = this.dataInfo.location.split(',', 2);
    var link = "http://www.google.com/maps/place/"+ Number(splitted[0]) + "+" + Number(splitted[1]);
    // $location.path(link);
    window.open(link);
   console.log("test")
  }

  // openInfo(marker: MapMarker) {
  //   this.infoWindow.open(marker);
  // }

}
