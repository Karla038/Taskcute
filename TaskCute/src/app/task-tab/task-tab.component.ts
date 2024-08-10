import { Component } from '@angular/core';
import { ServiceTaskService } from '../services/service.task.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

interface Tarea {
  id: number;
  nombre: string;
  descripcion?: string;
  fechaVencimiento?: Date;
  completada: boolean;
}

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrl: './task-tab.component.css'
})


export class TaskTabComponent {
  tareas: Tarea[] = [];
  nuevaTarea: Tarea = { id: 0, nombre: '', descripcion: '', fechaVencimiento: undefined, completada: false };

  constructor(private tareasService: ServiceTaskService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareasService.obtenerTareas().subscribe(tareas => this.tareas = tareas);
  }

  eliminarTarea(id: number): void {
    this.tareasService.eliminarTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    });
  }

  actualizarTarea(tarea: Tarea): void {
    this.tareasService.actualizarTarea(tarea).subscribe();
  }

}
