import { Component } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { CommonModule } from '@angular/common';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';

@Component({
  selector: 'app-bar-clock',
  templateUrl: './bar-clock.component.html',
  styleUrls: ['./bar-clock.component.css'],
  standalone: true,
  imports: [CommonModule, TimeSliderComponent] // Importa CommonModule para usar directivas como *ngIf
})
export class BarClockComponent extends BaseClockComponent {
  // Método para calcular el porcentaje de llenado de las barras
  getBarPercentage(value: number, total: number): number {
    return (value / total) * 100; // Porcentaje de llenado
  }

  // Método para obtener las partes de la hora y convertirlas a números
  getTimeParts(): { horas: number, minutos: number, segundos: number } {
    const [horas, minutos, segundos] = this.horaActual.split(':').map(part => parseInt(part, 10));
    return { horas, minutos, segundos };
  }
}
