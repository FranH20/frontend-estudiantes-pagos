import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [RouterModule, MatTabsModule, CommonModule],
  exports: [MenuComponent],
})
export class SharedModule {}
