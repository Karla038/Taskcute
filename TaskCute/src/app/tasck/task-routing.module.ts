import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasckComponent } from "./tasck.component";
import { TaskTabComponent } from "../task-tab/task-tab.component";
import { authGuard } from "../guards/auth.guard";

const childRoutes:Routes = [
    {   path: 'tareas',
        component: TasckComponent,
        canActivate:[authGuard]
    },
    {   path: 'list-tareas', 
        component:TaskTabComponent,
        canActivate:[authGuard]
    },
]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [ RouterModule ]
})

export class TaskRoutingRoutesModule {}