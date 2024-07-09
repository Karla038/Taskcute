import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing'
import { TasckComponent } from './tasck/tasck.component';

const routes: Routes = [
  { path: 'tareas', component: TasckComponent },
  {path: 'register', component: RegisterComponent },
  {path: '', pathMatch : 'full', redirectTo: 'users/register'},
  {path: '**', pathMatch : 'full', redirectTo: 'users/register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
