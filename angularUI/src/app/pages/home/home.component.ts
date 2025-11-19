import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  helloMessage$?: Observable<string>;
  health$ = this.api.getHealth();

  constructor(private readonly api: ApiService) {}

  callBackend(): void {
    this.helloMessage$ = this.api.getHello('UST Engineer');
  }
}
