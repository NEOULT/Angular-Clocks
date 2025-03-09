import { Component } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { CommonModule } from '@angular/common';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';

@Component({
  selector: 'app-morse-clock',
  templateUrl: './morse-clock.component.html',
  styleUrls: ['./morse-clock.component.css'],
  standalone: true,
  imports: [CommonModule, TimeSliderComponent] // Importa CommonModule para usar directivas como *ngFor
})
export class MorseClockComponent extends BaseClockComponent {
  // Método para convertir un número a código Morse
  toMorse(value: number): string {
    const morseNumbers = [
      '-----', // 0
      '.----', // 1
      '..---', // 2
      '...--', // 3
      '....-', // 4
      '.....', // 5
      '-....', // 6
      '--...', // 7
      '---..', // 8
      '----.'  // 9
    ];
    return value
      .toString()
      .split('')
      .map(digit => morseNumbers[parseInt(digit, 10)])
      .join(' ');
  }

  // Método para obtener la hora en código Morse
  getMorseTime(): { horas: string, minutos: string, segundos: string } {
    const [horas, minutos, segundos] = this.horaActual.split(':').map(Number);
    return {
      horas: this.toMorse(horas),
      minutos: this.toMorse(minutos),
      segundos: this.toMorse(segundos)
    };
  }
}
