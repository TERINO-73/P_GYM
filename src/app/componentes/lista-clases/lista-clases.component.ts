import { Component } from '@angular/core';

import { ServiciosService } from '../../servicios/servicios.service';
import { Router, RouterLink } from '@angular/router';

import { Clase } from '../../modelos/clase';

@Component({
  selector: 'app-lista-clases',
  imports: [RouterLink],
  templateUrl: './lista-clases.component.html',
  styleUrl: './lista-clases.component.css'
})
export class ListaClasesComponent {

  public listaClases:Clase[] = [];

  constructor(private peticion: ServiciosService, private ruta: Router) {
    this.peticion.listarClases().subscribe(datos => {
      console.log("Tamos en el constructor", datos);
      this.listaClases = datos;
    });
  }

  ngOnInit() {

  }
}
