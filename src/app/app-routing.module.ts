
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddfurnitureComponent } from './addfurniture/addfurniture.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewFurnitureComponent } from './view-furniture/view-furniture.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
// here we are configuring routes
const routes: Routes = [
  {
    path:"",component:BodyComponent
  },
  {
    path:"view",component:ViewFurnitureComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"add",component:AddfurnitureComponent
  },
  {
    path:"cart",component:AddToCartComponent
  },
  {
    path:"edit/:id",component:AddfurnitureComponent
  },
  {
    path:"delete/:title",component:ViewFurnitureComponent,canActivate:[LoginGuardGuard]
  },
  {
    path:"**",component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }