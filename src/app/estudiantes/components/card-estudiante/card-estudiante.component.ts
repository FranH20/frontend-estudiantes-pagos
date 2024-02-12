import { Component, Input } from '@angular/core';
import { Estudiante } from '../../interfaces/personas.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'estudiantes-card-estudiante',
  templateUrl: './card-estudiante.component.html',
  styleUrls: ['./card-estudiante.component.css'],
})
export class CardEstudianteComponent {
  @Input()
  public estudiante!: Estudiante;

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: this.estudiante,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    });
  }
}
