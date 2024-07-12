import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasckComponent } from './tasck/tasck.component';
import { TaskTabComponent } from './task-tab/task-tab.component';


const routes: Routes = [
  { path: 'tareas', component: TasckComponent },
  {path: 'list-tareas', component:TaskTabComponent},
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: '**', redirectTo: '/tareas' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
