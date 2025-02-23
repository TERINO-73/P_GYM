import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule,ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../../servicios/servicios.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clases-form',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './clases-form.component.html',
  styleUrl: './clases-form.component.css'
})
export class ClasesFormComponent {
  public form :FormGroup
  textoBoton:string = "Anadir";


  constructor(private peticion: ServiciosService, private ruta: Router, private route: ActivatedRoute,private fb:FormBuilder){
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
    const personaId = this.route.snapshot.params['id'];
    console.log("id = " + personaId);
    if (personaId == -1) { // Se trata de un alta (Añadir)
      this.textoBoton = "Añadir";  
    } else {
      this.textoBoton = "Modificar";

      this.peticion.selClaseId(personaId).subscribe({
        next: persona => this.form.patchValue(persona),
        error: error => console.log("Hay error: ", error)
      });
    }

    
  }

  // Lógica del botón "Añadir y Cancelar"

    // Aquí puedes realizar la lógica para añadir la persona, por ejemplo:
    // - Enviar los datos al backend mediante un servicio.
    // - Mostrar un mensaje de éxito o redirigir a otro lugar.

    onSubmit() {

      console.log("this.form.value: ", this.form.value);

      if (this.form.value.id == -1) {
        this.peticion.anadeClase(this.form.value).subscribe(
          res=>{
            console.log(res);
            this.ruta.navigate(['/']);
          },
          error=>console.log(error)
        );
      } else {
        this.peticion.modificaClase(this.form.value).subscribe({
          next: res=>{
            console.log(res);
            this.ruta.navigate(['/']);
          },
          error: error=>console.log(error)
      });
     }
    }

}
