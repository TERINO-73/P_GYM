import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from '../modelos/clase';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url:string = "http://localhost/serviciosWeb/Gimnasio/servidor.php";

  constructor(private http: HttpClient) { }

  listarClases() {
    let pa = JSON.stringify({
      servicio: "listarClases"
    });
    return this.http.post<Clase[]>(this.url, pa);
  }
}
