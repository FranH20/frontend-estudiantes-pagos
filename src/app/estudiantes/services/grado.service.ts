import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grado } from '../interfaces/grado.interface';

@Injectable({
  providedIn: 'root',
})
export class GradoService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getGrados(): Observable<Grado[]> {
    return this.http.get<Grado[]>(`${this.baseUrl}/grados`);
  }
}
