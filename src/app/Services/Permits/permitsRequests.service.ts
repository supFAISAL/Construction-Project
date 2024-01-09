import { DataService } from './../data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermitsRequestsService {

  Requests:any[] = [
    {
      workOrderNumber:123456789,
      department : 'برامج',
    },
    {
      workOrderNumber:212121254548,
      department : 'حفريات',
    },
    {
      workOrderNumber:54645654,
      department : 'تركيبات',
    }
  ]
constructor(private workOrder:DataService) { }

  pullworkOrderData(){
    this.Requests.forEach(request=>{
      this.workOrder.dummydata.forEach(workOrder=>{
        if(request.workOrderNumber===workOrder.orderNumber){
          workOrder.permits.forEach(permit=>{
            if(permit.permitsType!==request.department){
              console.log(request.department)
              request['workOrder'] = workOrder
            }
          })
        }
      })
    })
    console.log(this.Requests)
  }
}