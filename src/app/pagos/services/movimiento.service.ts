import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../interface/reporte.interface';

@Injectable({
  providedIn: 'root',
})
export class MovimientoService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  obtenerReporte(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.baseUrl}/movimientos/pagos`);
  }
}
