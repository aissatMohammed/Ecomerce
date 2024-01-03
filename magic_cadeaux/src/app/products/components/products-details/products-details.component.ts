import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
  id!:any
  data:any={}
constructor(private rout:ActivatedRoute, private service:ProductsService){
  this.id=this.rout.snapshot.paramMap.get("id")
}
  ngOnInit(): void {
    this.getProduct()
  }

getProduct(){
  this.service.getPorductid(this.id).subscribe(res=>{
    this.data=res
  })
}
}
