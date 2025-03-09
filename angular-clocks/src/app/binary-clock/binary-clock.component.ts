import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';

@Component({
  selector: 'app-binary-clock',
  templateUrl: './binary-clock.component.html',
  styleUrls: ['./binary-clock.component.css'],
  standalone: true,
  imports: [CommonModule, TimeSliderComponent]
})
export class BinaryClockComponent extends BaseClockComponent {

  getBinaryTime() {
    const [horas, minutos, segundos] = this.horaActual.split(':').map(Number);
    return {
      horas: this.convertToBinaryArray(horas, 4),
      minutos: this.convertToBinaryArray(minutos, 6),
      segundos: this.convertToBinaryArray(segundos, 6)
    };
  }

  private convertToBinaryArray(value: number, length: number): number[] {
    return value.toString(2).padStart(length, '0').split('').map(Number);
  }
}
