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
  public form :FormGroup

  constructor(private peticion: ServiciosService, private ruta: Router, private route: ActivatedRoute,private fb:FormBuilder) {
    this.peticion.listarClases().subscribe(datos => {
      console.log("Tamos en el constructor", datos);
      this.listaClases = datos;
    });
    this.form = this.fb.group({
      //Declaramos los diferentes campos del formulario
              id: this.fb.control(-1),
            dni: this.fb.control('',[Validators.required,Validators.minLength(9)]),
            nombre: this.fb.control('',[Validators.required,Validators.minLength(1)]),
            apellidos:this.fb.control('',[Validators.required,Validators.minLength(1)]),
          });
          this.textoBoton = "AÑADIR";
  }

  ngOnInit() {

  }

  borrar(id: number, nombre: string) {
    if (confirm("¿Estas seguro de borrar a " + nombre + "?")) {
      this.peticion.borrarPersona(id).subscribe((daticos: any) => {
        console.log("Tamos en el borrar", daticos);
      });
    }
  }
  anadeClase(){

  }
  editarClase(){

  }
  onSubmit(){

  }
}