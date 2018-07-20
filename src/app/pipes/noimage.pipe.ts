import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // El pipe va a recibir un array de imagenes y va a devolver un string
  transform(images: any[]): string {

    // Si no viene nada en las imágenes
    if (!images) {
      return 'assets/img/noimage.png';
    }

    // Si no está vacío y contiene un array, se devuelve la url de la primera img
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
