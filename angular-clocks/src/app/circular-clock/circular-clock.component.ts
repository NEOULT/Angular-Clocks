import { Component } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { CommonModule } from '@angular/common';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';

@Component({
  selector: 'app-circular-clock',
  templateUrl: './circular-clock.component.html',
  styleUrls: ['./circular-clock.component.css'],
  standalone: true,
  imports: [CommonModule,TimeSliderComponent]
})
export class CircularClockComponent extends BaseClockComponent {
  // Método para calcular el ángulo de rotación de las manecillas
  getRotation(value: number, total: number): number {
    return (value / total) * 360 -90; // Convierte el valor a grados (0-360)
  }

  // Método para obtener las horas como número
  getHours(): number {
    return parseInt(this.horaActual.split(':')[0], 10);
  }

  // Método para obtener los minutos como número
  getMinutes(): number {
    return parseInt(this.horaActual.split(':')[1], 10);
  }

  // Método para obtener los segundos como número
  getSeconds(): number {
    return parseInt(this.horaActual.split(':')[2], 10);
  }
}
