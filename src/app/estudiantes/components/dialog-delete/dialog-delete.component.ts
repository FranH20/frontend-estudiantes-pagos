import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estudiante } from '../../interfaces/personas.interface';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css'],
})
export class DialogDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Estudiante,
    private personaService: PersonaService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  borrar(): void {
    this.personaService.borrarEstudiante(this.data.nid_persona).subscribe();
    this.dialogRef.close();
  }
}
