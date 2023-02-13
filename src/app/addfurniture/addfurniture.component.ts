import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService1Service } from '../service1/user-service1.service';

@Component({
  selector: 'app-addfurniture',
  templateUrl: './addfurniture.component.html',
  styleUrls: ['./addfurniture.component.css']
})
export class AddfurnitureComponent implements OnInit {
  furnituredetails = this.fb.group({
    title:['',[Validators.required]],
    desc:['',[Validators.required]],
    price:['',[Validators.required]]
  })

  get title(){
    return this.furnituredetails.get('title');
  }
  get desc(){
    return this.furnituredetails.get('title');
  }
  get price(){
    return this.furnituredetails.get('title');
  }

  constructor(private ar: ActivatedRoute,private fb:FormBuilder,private addService:UserService1Service,private router:Router) {
    this.addproducts={title:"",desc:"",price:""}
   }

  ngOnInit(): void {

  }
  addproducts:any={}
  addFurnitureData(){
    this.ar.paramMap.subscribe(param=>{
      var id = param.get('id');
      if(id==null){
        this.addService.addAllFurniture(this.furnituredetails.value).subscribe(()=>{alert("Data Added")},
        (error:Error)=>{alert("Furniture is already present");console.log(error.message)})
        // this.router.navigateByUrl("");
      }
    })
  }

}
