import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface HelloResponse {
  message: string;
}

interface HealthResponse {
  status: string;
  env: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getHello(name?: string): Observable<string> {
    const params = name ? { name } : {};
    return this.http
      .get<HelloResponse>(`${this.baseUrl}/api/v1/hello`, { params })
      .pipe(map(res => res.message));
  }

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.baseUrl}/health`);
  }
}
