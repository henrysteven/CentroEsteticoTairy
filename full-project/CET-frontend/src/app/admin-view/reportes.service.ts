import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  constructor(private http: HttpClient) {}

  getUsuario(usuario): Observable<any> {
    let url =
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/searchUsuario?id=' +
      usuario;
    return this.http.get(url);
  }

  getComentarios(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/comentarios'
    );
  }
}
