import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  helloMessage$?: Observable<string>;
  health$!: Observable<string>;

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    // Initialize health$ after DI is ready
    this.health$ = this.api.getHealth();
  }

  // This is used by (click)="callBackend()"
  callBackend(): void {
    // If your backend expects a name, pass it here
    this.helloMessage$ = this.api.getHello('UST Trade App');
  }
}
