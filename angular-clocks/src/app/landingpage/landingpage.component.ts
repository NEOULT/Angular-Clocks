import { Component } from '@angular/core';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { RouterModule } from '@angular/router';
import { AnalogClockComponent } from "../analog-clock/analog-clock.component";
import { BinaryClockComponent } from '../binary-clock/binary-clock.component';
import { CircularClockComponent } from '../circular-clock/circular-clock.component';
import { TextClockComponent } from '../text-clock/text-clock.component';
import { MorseClockComponent } from '../morse-clock/morse-clock.component';
import { BarClockComponent } from '../bar-clock/bar-clock.component';
import { RomanClockComponent } from '../roman-clock/roman-clock.component';
import { SevenSegmentClockComponent } from '../seven-segment-clock/seven-segment-clock.component';
import { VoiceClockComponent } from '../voice-clock/voice-clock.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  standalone: true,
  imports: [
    DigitalClockComponent,
    RouterModule,
    AnalogClockComponent,
    BinaryClockComponent,
    CircularClockComponent,
    TextClockComponent,
    MorseClockComponent,
    BarClockComponent,
    RomanClockComponent,
    SevenSegmentClockComponent,
    VoiceClockComponent

]
})
export class LandingpageComponent {

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('currentUser'); // Elimina el usuario del almacenamiento local
    this.router.navigate(['/auth']); // Redirige a la página de login
  }

}
