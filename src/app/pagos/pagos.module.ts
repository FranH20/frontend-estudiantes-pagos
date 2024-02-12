import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PagosRoutingModule } from './pagos-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, PagosRoutingModule, MatTableModule],
})
export class PagosModule {}
