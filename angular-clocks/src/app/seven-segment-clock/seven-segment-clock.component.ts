import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';
import { BaseClockComponent } from '../components/baseclockcomponent';

@Component({
  selector: 'app-seven-segment-clock',
  templateUrl: './seven-segment-clock.component.html',
  styleUrls: ['./seven-segment-clock.component.css'],
  standalone: true,
  imports: [CommonModule, TimeSliderComponent]
})
export class SevenSegmentClockComponent extends BaseClockComponent {
  get timeArray(): string[] {
    return this.horaActual.split('');
  }

  // Mapeo de dígitos a sus representaciones de 7 segmentos
  segmentMap: { [key: string]: boolean[] } = {
    '0': [true, true, true, false, true, true, true],
    '1': [false, false, true, false, false, true, false],
    '2': [true, false, true, true, true, false, true],
    '3': [true, false, true, true, false, true, true],
    '4': [false, true, true, true, false, true, false],
    '5': [true, true, false, true, false, true, true],
    '6': [true, true, false, true, true, true, true],
    '7': [true, true, true, false, false, true, false],
    '8': [true, true, true, true, true, true, true],
    '9': [true, true, true, true, false, true, true],
    ':': [false, false, false, false, false, false, false], // Para los dos puntos
  };

  // Método para obtener el estado de los segmentos de un dígito
  getSegments(digit: string): boolean[] {
    return this.segmentMap[digit] || [false, false, false, false, false, false, false];
  }
}
