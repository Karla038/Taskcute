import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Tarea {
  id: number;
  nombre: string;
  descripcion?: string;
  fechaVencimiento?: Date;
  completada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {

 
  private apiUrl = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) { }

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.apiUrl);
  }

  agregarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }

  eliminarTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  actualizarTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.put<Tarea>(`${this.apiUrl}/${tarea.id}`, tarea);
  }
}
