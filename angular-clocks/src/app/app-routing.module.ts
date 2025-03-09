import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { BinaryClockComponent } from './binary-clock/binary-clock.component';
import { CircularClockComponent } from './circular-clock/circular-clock.component';
import { TextClockComponent } from './text-clock/text-clock.component';
import { MorseClockComponent } from './morse-clock/morse-clock.component';
import { BarClockComponent } from './bar-clock/bar-clock.component';
import { RomanClockComponent } from './roman-clock/roman-clock.component';
import { SevenSegmentClockComponent } from './seven-segment-clock/seven-segment-clock.component';
import { VoiceClockComponent } from './voice-clock/voice-clock.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth/authGuard.component';
import { loginGuard } from './auth/loginGuard.component';

const routes: Routes = [
  { path: 'digital-clock', component: DigitalClockComponent, canActivate: [authGuard] },
  { path: 'analog-clock', component: AnalogClockComponent, canActivate: [authGuard] },
  { path: 'binary-clock', component: BinaryClockComponent, canActivate: [authGuard] },
  { path: 'circular-clock', component: CircularClockComponent, canActivate: [authGuard] },
  { path: 'text-clock', component: TextClockComponent, canActivate: [authGuard] },
  { path: 'landing', component: LandingpageComponent, canActivate: [authGuard] },
  { path: 'morse-clock', component: MorseClockComponent, canActivate: [authGuard] },
  { path: 'bar-clock', component: BarClockComponent, canActivate: [authGuard] },
  { path: 'roman-clock', component: RomanClockComponent, canActivate: [authGuard] },
  { path: 'seven-segment-clock', component: SevenSegmentClockComponent, canActivate: [authGuard] },
  { path: 'voice-clock', component: VoiceClockComponent, canActivate: [authGuard] },
  { path: 'auth', component: AuthComponent, canActivate: [loginGuard] },


  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', redirectTo: '/landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
