import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasckComponent } from './tasck/tasck.component';

const routes: Routes = [
  { path: 'tareas', component: TasckComponent },
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: '**', redirectTo: '/tareas' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
