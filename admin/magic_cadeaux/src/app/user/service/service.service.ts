import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {
  
   }
   getAlluser(){
    return this.http.get('https://fakestoreapi.com/users')

   }
   deleteuser(id:number){
    return this.http.delete('https://fakestoreapi.com/users/'+id)
   }
   
}
