import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() title:string=""
  @Input() data:any[]=[]
  @Output() SelectedValue = new EventEmitter()
  datachange(event:any){
    this.SelectedValue.emit(event)
  }
}
