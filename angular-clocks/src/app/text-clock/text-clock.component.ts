import { Component } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { CommonModule } from '@angular/common';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';

@Component({
  selector: 'app-text-clock',
  templateUrl: './text-clock.component.html',
  styleUrls: ['./text-clock.component.css'],
  standalone: true,
  imports: [CommonModule,TimeSliderComponent] // Importa CommonModule para usar directivas como *ngIf
})
export class TextClockComponent extends BaseClockComponent {
  // Método para convertir la hora en texto
  getHoraEnTexto(): string {
    const [horas, minutos] = this.horaActual.split(':').map(Number);

    const horasEnTexto = this.convertirNumeroATexto(horas);
    const minutosEnTexto = this.convertirMinutosATexto(minutos);

    return `Son las ${horasEnTexto} ${minutosEnTexto}`;
  }

  // Método para convertir números a texto (0-23)
  private convertirNumeroATexto(numero: number): string {
    const textos = [
      'doce', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis',
      'siete', 'ocho', 'nueve', 'diez', 'once', 'doce'
    ];
    return textos[numero % 12] || '';
  }

  // Método para convertir minutos a texto
  private convertirMinutosATexto(minutos: number): string {
    if (minutos === 0) {
      return 'en punto';
    } else if (minutos === 15) {
      return 'y cuarto';
    } else if (minutos === 30) {
      return 'y media';
    } else if (minutos === 45) {
      return 'menos cuarto';
    } else {
      return `y ${minutos} minutos`;
    }
  }
}
