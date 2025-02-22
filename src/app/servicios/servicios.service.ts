import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from '../modelos/clase';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url = environment.API_URL_ale;

  constructor(private http: HttpClient) { }

  listarClases() {
    let pa = JSON.stringify({
      servicio: "listarClases"
    });
    return this.http.post<Clase[]>(this.url, pa);
  }

  borrarPersona(id:number){
    let pa = JSON.stringify({ accion: 'borrarClase', id: id});
    return this.http.post<Clase[]>(this.url, pa);
  }
}