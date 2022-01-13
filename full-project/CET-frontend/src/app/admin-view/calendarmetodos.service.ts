import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarmetodosService {
  private URL =
    'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/';
  constructor(private http: HttpClient) {}

  enviar(user) {
    return this.http.post(this.URL + 'cita/generarCita', user);
  }
  getservicios(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/servicios'
    );
  }

  getevents(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/cita/citasbuscar'
    );
  }
}
