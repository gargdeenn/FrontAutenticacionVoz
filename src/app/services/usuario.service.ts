import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuario } from '../models/Usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  // get(): Observable<Usuario[]> {
  //   return this.http.get<Usuario[]>(this.baseUrl + 'api/Usuario')
  //     .pipe(
  //       tap(_ => this.handleErrorService.log('datos enviados')),
  //       catchError(this.handleErrorService.handleError<Usuario[]>('Consulta Usuario'))
  //     );
  // }
  // post(Usuario: Usuario):Observable<Usuario>{
  //   return this.http.post<Usuario>(this.baseUrl + 'api/Usuario', Usuario)
  //     .pipe(
  //       tap(_ => this.handleErrorService.log('datos enviados')),
  //       catchError(this.handleErrorService.handleError<Usuario>('Registrar Usuario'), )
  //     );
  // }
  // getId(idUsuario: string): Observable<Usuario> {
  //   const url = `${this.baseUrl + 'api/Usuario'}/${idUsuario}`;
  //     return this.http.get<Usuario>(url, httpOptions)
  //     .pipe(
  //       tap(_ => this.handleErrorService.log('datos enviados')),
  //       catchError(this.handleErrorService.handleError<Usuario>('Buscar Usuario'))
  //     );
  // }
}
