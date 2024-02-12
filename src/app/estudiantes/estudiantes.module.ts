import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CardEstudianteComponent } from './components/card-estudiante/card-estudiante.component';
import { MatCardModule } from '@angular/material/card';
import { EstudianteImagePipe } from './pipes/estudiante-image.pipe';
import { EstudianteAgePipe } from './pipes/estudiante-age.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DialogFormComponent,
    CardEstudianteComponent,
    EstudianteImagePipe,
    EstudianteAgePipe,
    DialogDeleteComponent,
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule,
    MatAutocompleteModule,
  ],
})
export class EstudiantesModule {}
