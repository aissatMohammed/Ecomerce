import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:product[]=[]
  category:string[]=[]
loading:boolean=false
cartProducts:any[]=[]
  constructor(private service:ProductsService){

  }
ngOnInit(): void {
  this.getProducts() 
  this.getCategorie()}
getProducts(){
  this.loading=true
  this.service.getAllProducts().subscribe((data:any)=>{
  this.products = data
  this.loading=false
  })
}
getCategorie(){
  this.loading=true
  this.service.getAllCategory().subscribe((data:any)=>{
  this.category = data
  this.loading=false
  })
}
filtrecategoty(event:any){
  let val= event.target.value
  if(val == 'All'){
    this.getProducts()
  }else{
  this.getspescategory(val)
}}
getspescategory(keyword:any){
  this.loading=true
  this.service.getspecificcategory(keyword).subscribe((data:any)=>{
    this.products= data
    this.loading=false
  })
}
addTocart(event:any){
  if("cart" in localStorage){
    this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProducts.find(item=>item.item.id == event.item.id)
    if(exist){
      alert("data exicte")
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }

  }else{
    this.cartProducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }
}
}
