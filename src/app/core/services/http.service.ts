import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}
@Injectable()
export class HttpService {
  constructor(protected http: HttpClient) {}

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  public doGet<T>(serviceUrl: string): Observable<T> {
    return this.http.get<T>(serviceUrl);
  }

  public doPost<T, R>(serviceUrl: string, body: T): Observable<R> {
    return this.http.post<R>(serviceUrl, body);
  }
}
