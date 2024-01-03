import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(private service:CartsService,private build:FormBuilder, private productService:ProductsService){

}
carts:any[]=[];
products:any[]=[] 
form!:FormGroup
details:any;
  ngOnInit(): void {
    this.form=this.build.group({
      start:[''],
      end:['']
    })
    this.getallcarts()

  }


getallcarts(){
this.service.getallcartse().subscribe((res:any)=>{

  this.carts=res
})
  
}
applyfilter(){
  let date= this.form.value
  this.service.getallcartse(date).subscribe((res:any)=>{
  this.carts=res
  })
}
deletCart(id:number){
this.service.getallcartse(id).subscribe(res=>{
  this.getallcarts()
  alert("cart delete succsess")
})
}
view(index:number){
  this.products=[]
  this.details=this.carts[index]
  for(let x in this.details.products){
    this.productService.getPorductid(this.details.products[x].productId).subscribe(res=>{
     this.products.push({item:res,quantity:this.details.products[x].quantity})
    })
  }
  console.log(this.details)
}
}  