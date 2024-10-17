import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private API_KEY = environment.api_key;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Intercepting Requests');

    // Clonamos el request para añadir la cabecera de Authorization
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.API_KEY}`
      }
    });

    // Continuamos con la solicitud clonada
    return next.handle(authReq);
  }
}
