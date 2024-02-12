import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estudianteImage'
})
export class EstudianteImagePipe implements PipeTransform {

  private baseUrl:string = "http://localhost:3000/"

  transform(urlImage: unknown): unknown {
    return `${this.baseUrl}/${urlImage}`;
  }

}
