import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
base64:any;
form!:FormGroup
  constructor(private service:ProductsService, private build:FormBuilder){

  }
ngOnInit(): void {
  this.getProducts() 
  this.getCategorie()
  this.form=this.build.group({
    title:['',[Validators.required]],
    price:['',[Validators.required]],
    description:['',[Validators.required]],
    image:['',[Validators.required]],
    category:['',[Validators.required]],
  })

}
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

getimagepath(event:any){
const file =event.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload=()=>{
  this.base64=reader.result;
  this.form.get('image')?.setValue(this.base64)

}
}
addproduct(){
  const model = this.form.value
  this.service.creatproduct(model).subscribe(res=>{
    alert("success ")
  })
  
}
getselectcategorie(event:any){
  this.form.get('category')?.setValue(event.target.value)

}
update(item:any){
  this.form.get('title')?.setValue(item.title)
  this.form.get('description')?.setValue(item.description)
  this.form.get('category')?.setValue(item.category)
  this.form.get('price')?.setValue(item.price)
  this.form.get('image')?.setValue(item.image)
  this.base64=item.image



}
}
