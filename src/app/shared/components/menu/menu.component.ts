import { Component } from '@angular/core';
import { NavLink } from '../../interfaces/navLink.interface';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  public navLinks: NavLink[] = [
    {
      key: 0,
      title: 'Estudiantes',
      link: './estudiantes',
    },
    {
      key: 1,
      title: 'Pagos',
      link: './pagos',
    },
    {
      key: 2,
      title: 'Reportes',
      link: './reportes',
    },
  ];
}
