import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing'


const routes: Routes = [
  {path: 'register', component: RegisterComponent },
  {path: '', pathMatch : 'full', redirectTo: 'users/register'},
  {path: '**', pathMatch : 'full', redirectTo: 'users/inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
