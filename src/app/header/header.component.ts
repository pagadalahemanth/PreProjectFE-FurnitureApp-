import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service1/login-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message:string="LoggedOut"
  action:string="success"

  logout()
  {
    this.ls.Logout();
    // alert("LoggedOut")
    this.snackbar.open(this.message,this.action)
    this.router.navigateByUrl("login");
  }

  constructor(public ls:LoginServiceService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

}
