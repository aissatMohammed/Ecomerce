import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata:any[]=[] 
  constructor(private service:ServiceService){

  }
  
  ngOnInit(): void {
    this.getuser()
  }
  getuser(){
    this.service.getAlluser().subscribe((res:any)=>{
      this.userdata=res
    })
  }
  deleteuse(id:number,i:number){
    this.service.deleteuser(id).subscribe((data:any)=>{
      this.userdata.splice(i,1)

    })
  }
}
