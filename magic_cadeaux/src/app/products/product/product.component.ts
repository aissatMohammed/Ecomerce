import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data!:any
  @Output() item= new EventEmitter()
  addbuton:boolean=false;
  amount:number=0;
  Add(){
  this.item.emit({item:this.data,quantity:this.amount})
}
}
