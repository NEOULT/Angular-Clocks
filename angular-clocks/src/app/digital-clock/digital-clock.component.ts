import { Component } from '@angular/core';
import { BaseClockComponent } from '../components/baseclockcomponent';
import { TimeSliderComponent } from '../components/time-slider/time-slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
  standalone: true,
  imports: [TimeSliderComponent, CommonModule]
})
export class DigitalClockComponent extends BaseClockComponent {}
