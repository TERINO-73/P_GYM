import { Component, AfterViewInit } from '@angular/core';
import { HorarioComponent } from '../horario/horario.component';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-principal',
  imports:[CommonModule,HorarioComponent],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const myCarouselElement = document.querySelector('#carouselExampleIndicators');
    if (myCarouselElement) {
      const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: true
      });
    }
  }
}