import { Pipe, PipeTransform } from '@angular/core';
import { Edad } from '../interfaces/personas.interface';

@Pipe({
  name: 'estudianteAge',
})
export class EstudianteAgePipe implements PipeTransform {
  transform(age: Edad): string {
    let fullAge = 'Sin edad registrada';
    if (age.years && age.months) {
      fullAge = `${age.years} año(s) ${age.months} mes(es)`;
    } else if (age.years) {
      fullAge = `${age.years} año(s)`;
    }
    return fullAge;
  }
}
