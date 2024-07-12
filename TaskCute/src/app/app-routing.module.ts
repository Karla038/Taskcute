import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing'
import { TasckComponent } from './tasck/tasck.component';

const routes: Routes = [
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
