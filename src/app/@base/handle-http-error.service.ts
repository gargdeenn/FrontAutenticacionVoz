import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {
constructor() { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      if (error.status == "400") {
        this.mostrarEstado400(error);
      }else if (error.status == "401") {​

        this.mostrarEstado400(error);​

      }
      return of(result as T);
    };
  }

  public log(message: string) {
    console.log(message);
  }

  mostrarEstado400(error: any): void {
    console.error(error);
    let contadorValidaciones: number = 0;
    let mensajeValidaciones: string =
      `Señor(a) usuario(a), se han presentado algunos errores de validación, por favor revíselos y vuelva a realizar la operación.<br/><br/>`;
    for (const prop in error.error.errors) {
      contadorValidaciones++;
      mensajeValidaciones += `<strong>${contadorValidaciones}. ${prop}:</strong>`;

      error.error.errors[prop].forEach((element: any) => {
        mensajeValidaciones += `<br/> - ${element}`;
      });

      mensajeValidaciones += `<br/>`;
    }
  }
}
