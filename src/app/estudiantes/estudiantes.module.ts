import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class EstudiantesModule {}
