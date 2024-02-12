import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../../components/dialog-form/dialog-form.component';
import { PersonaService } from '../../services/persona.service';
import { Estudiante } from '../../interfaces/personas.interface';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public estudiantes: Estudiante[] = [];
  public selectedEstudiante?: Estudiante;
  public searchInput = new FormControl();

  constructor(
    public dialog: MatDialog,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.obtenerEstudiantes();
  }

  obtenerEstudiantes(): void {
    this.personaService
      .getEstudiantes()
      .subscribe((estudiante) => (this.estudiantes = estudiante));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.obtenerEstudiantes();
    });
  }

  searchEstudiante(): void {
    const value: string = this.searchInput.value || '';
    this.personaService
      .getEstudiantesByNombre(value)
      .subscribe((estudiante) => (this.estudiantes = estudiante));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedEstudiante = undefined;
      return;
    }
    const estud: Estudiante = event.option.value;
    this.searchInput.setValue(estud.full_name);
    this.selectedEstudiante = estud;
  }
}
