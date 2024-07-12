import { Component, OnInit } from '@angular/core';
import { ServiceTaskService } from '../services/service.task.service';
import { ToastrService } from 'ngx-toastr';

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
  styleUrls: ['./tasck.component.css'] // Corregido de styleUrl a styleUrls
})
export class TasckComponent implements OnInit {
  tareas: Tarea[] = [];
  nuevaTarea: Tarea = { id: 0, nombre: '', descripcion: '', fechaVencimiento: undefined, completada: false };

  constructor(private tareasService: ServiceTaskService,private toastr: ToastrService) { }

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

  showSuccess() {
    this.toastr.success('¡Hola mundo!', '¡Diversión con Toastr!', {
      closeButton: true
    });
  }

  showError() {
    this.toastr.error('¡Esto no es bueno!', 'Error grave', {
      closeButton: true
    });
  }

  showWarning() {
    this.toastr.warning('Estás siendo advertido.', 'Advertencia', {
      closeButton: true
    });
  }

  showInfo() {
    this.toastr.info('Solo alguna información para ti.', undefined, {
      closeButton: true
    });
  }
}
