import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface HelloResponse {
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://127.0.0.1:8050';

  getHealth(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/health`);
  }

  getHello(name?: string): Observable<string> {
    let params = new HttpParams();
    if (name) {
      params = params.set('name', name);
    }

    return this.http
      .get<HelloResponse>(`${this.baseUrl}/api/v1/hello`, { params })
      .pipe(map((res) => res.message));
  }
}
