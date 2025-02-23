import { Component } from '@angular/core';
import { ServiciosService } from '../../servicios/servicios.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Clase } from '../../modelos/clase';
import {ReactiveFormsModule,FormGroup, FormBuilder, Validators} from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css'],
  imports:[ReactiveFormsModule, RouterModule, CommonModule]
})
export class ListaClasesComponent {
  textoBoton:string = "Anadir";
  public listaClases: Clase[] = [];

  constructor(private peticion: ServiciosService, private ruta: Router, private route: ActivatedRoute,private fb:FormBuilder) {
    this.peticion.listarClases().subscribe(datos => {
      console.log("Tamos en el constructor", datos);
      this.listaClases = datos;
    });
    
  }


      

  borrar(id: number) {
    //Confirmacion
    if (confirm("Are you sure you want to delete this owner with id " + id + "?")) {
      this.peticion.borrarClase(id).subscribe(datos => {
        console.log("Tamos en el borrar", datos);
        this.listaClases = datos;
      });
    }
  }

}