import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../interface/reporte.interface';
import { MovimientoService } from '../../services/movimiento.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'estudiante', 'grado', 'descripcion_pension', 'monto', 'fecha_de_vencimiento', 'fecha_de_pago', 'year'];

  public reportes: Reporte[] = [];

  constructor(private movimientoService: MovimientoService) {}

  ngOnInit(): void {
    this.movimientoService
      .obtenerReporte()
      .subscribe((reporte) => (this.reportes = reporte));
  }
}
