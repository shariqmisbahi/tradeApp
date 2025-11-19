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
  health$!: Observable<any>;

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    // Load health immediately
    this.health$ = this.api.getHealth();
  }

  callBackend(): void {
    this.helloMessage$ = this.api.getHello('UST Trade App');
  }
}
