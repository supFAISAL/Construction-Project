import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermitsService {
Permits:any[] = [
  {
    workOrderNumber:123456789,
    permitsNum:12121212,
    permitsType:'برامج',
    permitValidity:[new Date(),new Date()],
  }
]
constructor() { }

}
