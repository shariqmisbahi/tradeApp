import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <div class="ust-shell">
      <div class="ust-card">
        <app-home></app-home>
      </div>
    </div>
  `
})
export class AppComponent {}
