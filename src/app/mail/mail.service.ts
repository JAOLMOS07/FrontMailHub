import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiURL = "http://apimailhub.test/api/v1/";
  sesion = JSON.parse(localStorage.getItem('sesion') || '{}');
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.sesion.token}`
      })
  }

  constructor(private httpClient: HttpClient) { }

  getEntrada(token: string): Observable<Mail[]> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
  }
    return this.httpClient.get<Mail[]>(this.apiURL+"mails/entrada", this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getMail(token: string,mailId: string): Observable<Mail> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
  }
    return this.httpClient.get<Mail>(this.apiURL+`mails/${mailId}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getEnviados(token: string): Observable<Mail[]> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
  }
    return this.httpClient.get<Mail[]>(this.apiURL+"mails/enviados", this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  Visto(token: string,mailId: number): Observable<Mail> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
  }
    return this.httpClient.put<Mail>(this.apiURL+`mails/visto/${mailId}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  create(token: string,mail: Mail): Observable<Mail[]> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
  }
    return this.httpClient.post<Mail[]>(this.apiURL+"mails",JSON.stringify(mail), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
