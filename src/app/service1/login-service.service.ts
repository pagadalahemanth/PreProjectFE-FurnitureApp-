import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public isUserLogged:boolean=false;
  public isLoggedin:boolean=false;
  public isAdminLogged:boolean=false;
  public user:any;

  constructor() { }
  userLogin(){
    this.isUserLogged=true;
    this.isLoggedin=true;
  }
  adminLogin()
  {
    this.isAdminLogged=true;
    this.isLoggedin=true;
  }
  Login()
  {
      this.isLoggedin=true
  }
  Logout()
  {
    this.isLoggedin=false;
  }

}
