import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    NavbarComponent, CounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngSkillLap';
}
