import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {

  }
  getAllProducts(){ 
    return this.http.get('https://fakestoreapi.com/products')
  }
  getAllCategory(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getspecificcategory(keyword:any){
    return this.http.get('https://fakestoreapi.com/products/category/'+ keyword)
  }
  getPorductid(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+ id)
  }
  creatproduct(model:any){
    return this.http.post('https://fakestoreapi.com/products/',model)
  }
}
