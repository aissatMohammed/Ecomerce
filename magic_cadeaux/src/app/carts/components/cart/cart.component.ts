import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private service:CartsService){

}
cartProducts:any[]=[];
total:any=0
success:boolean=false
  ngOnInit(): void {
    this.getProducts()

  }

getProducts(){
  if("cart" in localStorage){
    this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
  }
  this.getCartTotal()
}

getCartTotal(){
  this.total=0
  for(let x in this.cartProducts){
    this.total+=this.cartProducts[x].item.price*this.cartProducts[x].quantity
    
  }
}
minsAmount(index:number){
  this.cartProducts[index].quantity--;
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
plusAmount(index:number){
  this.cartProducts[index].quantity++;
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))

}
detecchangge(){
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))

}
deletitem(index:number){
this.cartProducts.splice(index,1)
this.getCartTotal()
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
clearlistproduct(){
  this.cartProducts=[]
  this.getCartTotal()
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
ordernow(){
  let product = this.cartProducts.map(item=>{
    return {productId:item.item.id , quantity:item.quantity}
  })
  let Model={
    userId:5,
    date:new Date(),
    products:product
  }
  this.service.creatNEwCart(Model).subscribe(res=>{
this.success=true
  })


}
}