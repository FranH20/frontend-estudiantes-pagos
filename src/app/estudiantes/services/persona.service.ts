import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Estudiante,
  EstudianteCreacion,
} from '../interfaces/personas.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.baseUrl}/personas/estudiantes`);
  }

  addEstudiante(
    estudiante: EstudianteCreacion
  ): Observable<EstudianteCreacion> {
    return this.http.post<EstudianteCreacion>(
      `${this.baseUrl}/personas`,
      estudiante
    );
  }

  getEstudiantesByNombre(nombre: string): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.baseUrl}/personas/${nombre}`);
  }

  borrarEstudiante(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/personas/${id}`);
  }
}
