import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InformacionService {
  constructor(private http: HttpClient) {}

  getComentarios(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/comentarios'
    );
  }

  getPromociones(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/promociones'
    );
  }

  getEstadisticasPromociones(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/promociones/estadisticas'
    );
  }

  getUsuario(usuario): Observable<any> {
    let url =
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/searchUsuario?id=' +
      usuario;
    return this.http.get(url);
  }

  getUsuarios(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/usuarios'
    );
  }

  getIntegrantes(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/empleados'
    );
  }

  getPersona(id): Observable<any> {
    let url =
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/search?id=' +
      id;
    return this.http.get(url);
  }

  getArea(id): Observable<any> {
    let url =
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/areas/search?id=' +
      id;
    return this.http.get(url);
  }

  getTipo(id): Observable<any> {
    let url =
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/tiposervicios/search?id=' +
      id;
    return this.http.get(url);
  }

  getTratamientos(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/servicios'
    );
  }

  getEstaditicasCitas(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/citas/estadisticas'
    );
  }

  getEstadisticas(): Observable<any> {
    return this.http.get(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/estadisticas'
    );
  }

  postContactanos(form): Observable<any> {
    return this.http.post(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/contactanos/email',
      form
    );
  }

  postNuevoUsuario(form): Observable<any> {
    return this.http.post(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/',
      form
    );
  }

  putUsuario(form): Observable<any> {
    return this.http.put(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/',
      form
    );
  }

  delUsuario(form): Observable<any> {
    return this.http.delete(
      'http://distribuidosbalancer-909688984.us-east-1.elb.amazonaws.com/personas/',
      form
    );
  }
}
