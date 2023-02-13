import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService1Service } from '../service1/user-service1.service';
import { LoginServiceService } from '../service1/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private logService:UserService1Service,private fb:FormBuilder,private ls:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  response!:string;
  
  logindetails=this.fb.group({
    email:['', [Validators.required]],
    password:['', [Validators.required]]});

    get email()
    {
      return this.logindetails.get('email');
    }
    get password()
    {
      return this.logindetails.get('password');
    }
  addLogData(){
    this.logService.addLogin(this.logindetails.value).subscribe(x=>
      {
        console.log(x);
        // this.response=x;
        console.log(x.token);
        console.log(x.usertype);
        console.log(x.message);
        if(x.usertype=="admin"){
          alert("Logged in as Admin")
            this.ls.adminLogin()
          this.router.navigateByUrl("")
        }else{
          alert("Logged in as User")
          this.ls.userLogin()
          // this.ls.Login();
          this.router.navigateByUrl("")
        }
      },
      (error:Error)=>{
        console.log(error.message)
        alert("wrong emailId or password")
      }
  )}
  
  // Login()
  // {
  //   if(this.ls.isLoggedin==true){
  //     alert("Login Successful");
  //     // this.router.navigateByUrl("add-note")
  //   }else if(this.ls.isAdminLogged==true){
  //     alert("admin loggedin")
  //   }else if(this.ls.isUserLogged==true){
  //     alert("user loggedin")
  //   }
  //   else{
  //     alert("wrong username or password");
  //   }
  // }
  
}
