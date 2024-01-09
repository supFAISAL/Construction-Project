import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  @Output() aClickedEvent = new EventEmitter<boolean>();
  constructor() { }

  MoreInfoClicked(toggle: boolean) {
    this.aClickedEvent.emit(toggle);
  }
}
