import { Component, Output,EventEmitter } from '@angular/core';




@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
})
export class HeaderComponent {

  @Output() featuresList = new EventEmitter<string>();

  constructor() {}
  onSelect(features:string) {
   this.featuresList.emit(features);
  }

}
