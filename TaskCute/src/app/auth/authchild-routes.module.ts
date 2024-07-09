//import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";

const childRoutes:Routes = [
  {path: 'register', component: RegisterComponent }

  // Auth routes for authenticated users

]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class AuthChildRoutesModule{}
