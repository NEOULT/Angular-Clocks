import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-slider',
  templateUrl: './time-slider.component.html',
  styleUrls: ['./time-slider.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class TimeSliderComponent {
  @Input() mostrarSlider: boolean = true; // Controla si el slider se renderiza
  @Input() relojEstatico: boolean = false; // Controla si el reloj debe estar estático

  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  @Output() tiempoCambiado = new EventEmitter<{ horas: number, minutos: number, segundos: number }>();
  @Output() tiempoCambiando = new EventEmitter<{ horas: number, minutos: number, segundos: number }>();
  @Output() ajusteIniciado = new EventEmitter<void>();
  @Output() ajusteTerminado = new EventEmitter<void>();

  cambiarTiempo(): void {
    this.tiempoCambiado.emit({
      horas: this.horas,
      minutos: this.minutos,
      segundos: this.segundos,
    });
  }

  cambiarTiempoEnTiempoReal(): void {
    this.tiempoCambiando.emit({
      horas: this.horas,
      minutos: this.minutos,
      segundos: this.segundos,
    });
  }

  comenzarAjuste(): void {
    this.ajusteIniciado.emit();
  }

  terminarAjuste(): void {
    this.ajusteTerminado.emit();
  }
}
