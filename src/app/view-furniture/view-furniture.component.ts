import { Component, OnInit } from '@angular/core';
import { UserService1Service } from '../service1/user-service1.service';
import { LoginServiceService } from '../service1/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-furniture',
  templateUrl: './view-furniture.component.html',
  styleUrls: ['./view-furniture.component.css']
})
export class ViewFurnitureComponent implements OnInit {
  allFurniture!:any[];

  getFurnitures(){
    this.furnitureService.getAllFurnitures().subscribe((x:any[])=>this.allFurniture=x)
  }

  constructor(private furnitureService:UserService1Service,public ls:LoginServiceService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(param=>{
      let title=param.get('title');
          if(this.ls.isLoggedin)
          {
            this.furnitureService.deleteProduct(title).subscribe(()=>{
          })}
         this.router.navigateByUrl("")
    })
     this.getFurnitures();
  }
  addToCart(){
    this.router.navigateByUrl("cart")
  }

  
  // update(){
  //   this.router.navigateByUrl("add")
  // }


}
