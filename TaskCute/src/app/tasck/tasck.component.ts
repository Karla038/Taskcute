import { Component } from '@angular/core';
import { ServiceTaskService } from '../services/service.task.service';

interface Tarea {
  id: number;
  nombre: string;
  descripcion?: string;
  fechaVencimiento?: Date;
  completada: boolean;
}

@Component({
  selector: 'app-tasck',
  templateUrl: './tasck.component.html',
  styleUrl: './tasck.component.css'
})
export class TasckComponent {
  tareas: Tarea[] = [];
  nuevaTarea: Tarea = { id: 0, nombre: '', descripcion: '', fechaVencimiento: undefined, completada: false };

  constructor(private tareasService: ServiceTaskService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareasService.obtenerTareas().subscribe(tareas => this.tareas = tareas);
  }

  agregarTarea(): void {
    if (this.nuevaTarea.nombre.trim()) {
      this.tareasService.agregarTarea(this.nuevaTarea).subscribe(tarea => {
        this.tareas.push(tarea);
        this.nuevaTarea = { id: 0, nombre: '', descripcion: '', fechaVencimiento: undefined, completada: false };
      });
    }
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
