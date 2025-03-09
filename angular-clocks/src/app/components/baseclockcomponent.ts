import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  template: '',
  standalone: true,
})
export abstract class BaseClockComponent implements OnInit, OnDestroy {
  horaActual: string = '';
  private intervalo: any;
  actualizacionAutomatica: boolean = true;

  @Input() mostrarSlider: boolean = true; // Controla si el slider se muestra
  @Input() relojEstatico: boolean = false; // Controla si el reloj está estático

  constructor() {}

  ngOnInit(): void {
    this.actualizarHora();
    this.intervalo = setInterval(() => {
      if (this.actualizacionAutomatica && !this.relojEstatico) {
        this.actualizarHora();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  protected actualizarHora(): void {
    const ahora = new Date();
    this.horaActual = this.formatearHora(ahora.getHours(), ahora.getMinutes(), ahora.getSeconds());
  }

  actualizarHoraManual(event: { horas: number, minutos: number, segundos: number }): void {
    this.horaActual = this.formatearHora(event.horas, event.minutos, event.segundos);
  }

  comenzarAjuste(): void {
    this.actualizacionAutomatica = false;
  }

  terminarAjuste(): void {
    this.actualizacionAutomatica = true;
  }

  protected formatearHora(horas: number, minutos: number, segundos: number): string {
    return `${this.agregarCero(horas)}:${this.agregarCero(minutos)}:${this.agregarCero(segundos)}`;
  }

  private agregarCero(valor: number): string {
    return valor < 10 ? `0${valor}` : `${valor}`;
  }
}
