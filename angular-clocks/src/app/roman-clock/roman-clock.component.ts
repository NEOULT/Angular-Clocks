import { Component } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { CommonModule } from '@angular/common';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';

@Component({
  selector: 'app-roman-clock',
  templateUrl: './roman-clock.component.html',
  styleUrls: ['./roman-clock.component.css'],
  standalone: true,
  imports: [CommonModule, TimeSliderComponent] // Importa CommonModule para usar directivas como *ngIf
})
export class RomanClockComponent extends BaseClockComponent {
  // Método para convertir un número a números romanos
  toRoman(num: number): string {
    const romanNumerals = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' }
    ];

    let result = '';
    for (const numeral of romanNumerals) {
      while (num >= numeral.value) {
        result += numeral.symbol;
        num -= numeral.value;
      }
    }
    return result;
  }

  // Método para obtener la hora en números romanos
  getRomanTime(): { horas: string, minutos: string, segundos: string } {
    const [horas, minutos, segundos] = this.horaActual.split(':').map(Number);
    return {
      horas: this.toRoman(horas),
      minutos: this.toRoman(minutos),
      segundos: this.toRoman(segundos)
    };
  }
}
