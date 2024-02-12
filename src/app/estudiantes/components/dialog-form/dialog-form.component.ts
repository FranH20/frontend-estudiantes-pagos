import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GradoService } from '../../services/grado.service';
import { Grado } from '../../interfaces/grado.interface';
import { PersonaService } from '../../services/persona.service';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { EstudianteCreacion } from '../../interfaces/personas.interface';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

import 'moment/locale/es';
import * as moment from 'moment';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-PE' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DialogFormComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(40)]],
    apellidoPaterno: ['', [Validators.required, Validators.maxLength(40)]],
    apellidoMaterno: ['', [Validators.required, Validators.maxLength(40)]],
    idGrado: [0, [Validators.required, Validators.min(1)]],
    fechaDeNacimiento: ['', [Validators.required]],
  });

  public grados: Grado[] = [];
  public maxDate: Date = new Date();
  public startDate: Date = new Date(2000, 0, 1);
  public age: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private _adapter: DateAdapter<any>,
    private gradoService: GradoService,
    private personaService: PersonaService
  ) {
    this._locale = 'es';
    this._adapter.setLocale(this._locale);
  }

  ngOnInit(): void {
    this.gradoService.getGrados().subscribe((grados) => (this.grados = grados));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get currentEstudiante(): EstudianteCreacion {
    const estudiante = this.myForm.value as EstudianteCreacion;
    return estudiante;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.personaService.addEstudiante(this.currentEstudiante).subscribe();
    this.myForm.reset();
    this.onNoClick();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.myForm.value.fechaDeNacimiento = moment(event.value)
      .format('DD/MM/YYYY')
      .toString();
    const years = moment().diff(event.value, 'years');
    this.age = `${years} años`;
  }
}
