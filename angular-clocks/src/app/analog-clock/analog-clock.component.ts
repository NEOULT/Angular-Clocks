import { Component } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
  standalone: true,
  imports: [TimeSliderComponent, CommonModule]
})
export class AnalogClockComponent extends BaseClockComponent {

  getHourRotation(): string {
    const horas = this.horaActual.split(':')[0];
    const grados = (parseInt(horas) % 12) * 30; // 30 grados por hora (360/12)
    return `rotate(${grados}deg)`;
  }

  getMinuteRotation(): string {
    const minutos = this.horaActual.split(':')[1];
    const grados = parseInt(minutos) * 6; // 6 grados por minuto (360/60)
    return `rotate(${grados}deg)`;
  }

  getSecondRotation(): string {
    const segundos = this.horaActual.split(':')[2];
    const grados = parseInt(segundos) * 6; // 6 grados por segundo (360/60)
    return `rotate(${grados}deg)`;
  }

}
