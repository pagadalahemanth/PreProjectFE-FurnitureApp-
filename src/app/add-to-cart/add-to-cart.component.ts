import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service1/login-service.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  cartdetails = this.fb.group({
    quantity:[''],
    size:['']
  })
  message:string="Added to cart"
  action:string="success"

  addToCart(){
    console.log(this.ls.isLoggedin)
    // alert("Added to cart")
      this.snackbar.open(this.message,this.action)
  }

  constructor(public ls:LoginServiceService,private fb:FormBuilder,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

}
