import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing'
import { TaskRoutingRoutesModule } from './tasck/task-routing.module';


const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'users/register'},
  {path: '**', pathMatch : 'full', redirectTo: 'users/inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    TaskRoutingRoutesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
