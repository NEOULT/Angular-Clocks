import { Component, OnInit } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voice-clock',
  templateUrl: './voice-clock.component.html',
  styleUrls: ['./voice-clock.component.css'],
  standalone: true,
  imports: [TimeSliderComponent, CommonModule],
})
export class VoiceClockComponent extends BaseClockComponent implements OnInit {
  private synth: SpeechSynthesis;
  private utterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    super();
    this.synth = window.speechSynthesis; // Inicializar la API de síntesis de voz
  }

  // Método para convertir la hora en texto
  getTimeAsText(): string {
    const [horas, minutos] = this.horaActual.split(':').map(Number); // Obtener horas y minutos
    const hourText = horas > 12 ? horas - 12 : horas; // Convertir a formato 12 horas
    const minuteText = minutos === 0 ? '' : `y ${minutos} minutos`;
    const period = horas >= 12 ? 'de la tarde' : 'de la mañana';
    return `Son las ${hourText} ${minuteText} ${period}`;
  }

  // Método para leer la hora en voz alta
  speakTime(): void {
    if (this.synth.speaking) {
      this.synth.cancel(); // Detener cualquier síntesis en curso
    }

    const text = this.getTimeAsText();
    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.lang = 'es-ES'; // Configurar el idioma (español)
    this.synth.speak(this.utterance); // Leer el texto en voz alta
  }

  // Sobrescribir el método actualizarHoraManual para usar la hora del slider
  override actualizarHoraManual(event: { horas: number, minutos: number, segundos: number }): void {
    super.actualizarHoraManual(event); // Actualizar horaActual en la clase base
    if (!this.relojEstatico) {
      this.speakTime(); // Leer la hora en voz alta si el reloj no está en modo estático
    }
  }
}
