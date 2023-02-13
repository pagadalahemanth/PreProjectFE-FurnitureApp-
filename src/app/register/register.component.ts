import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { UserService1Service } from '../service1/user-service1.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userdetails=this.fb.group({
    firstName:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    lastName:['',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]{8,99}')]],
    cpassword:[''],
    usertype:['']
  },{validators:this.confirmPassword});

  confirmPassword(fc:AbstractControl):ValidationErrors|null
  {
    let pass = fc.get('password')?.value
    let cpass = fc.get('cpassword')?.value
    if(pass!=cpass)
    {
      return {mustmatch:false}
    }
    return null;
  }

  constructor(private fb:FormBuilder, private regService:UserService1Service,private router:Router) {
    // this.userdetails.valueChanges.subscribe(x=>{console.log(x)});
  }
  get firstName()
  {
    return this.userdetails.get('firstName');
  }
  get lastName()
  {
    return this.userdetails.get('lastName');
  }
  get email()
  {
    return this.userdetails.get('email');
  }
  get password()
  {
    return this.userdetails.get('password');
  }
  get cpassword()
  {
    return this.userdetails.get('cpassword');
  }
  get usertype()
  {
    return this.userdetails.get('usertype')
  }

    addData(){
    // this.datatobeAdded.emit(this.userdetails);
    this.regService.addReg(this.userdetails.value).subscribe(x=>{
      alert("Added successfully")
    }, (err:Error)=>{
      console.log(err.message)
      alert("Already Exists in Database")}
    )
    this.router.navigateByUrl("login")
  }

  ngOnInit(): void {
  }

}
