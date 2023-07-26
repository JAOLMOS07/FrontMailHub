import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://apimailhub.test/api/v1/";
  
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  }

  constructor(private httpClient: HttpClient) { }

/*   getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  } */

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL+"register", JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  login(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL+"login", JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  logout(token: Object): Observable<any> {
    return this.httpClient.post<any>(this.apiURL+"logout", JSON.stringify(token), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getUser(token: string,id: number): Observable<User> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
  }
    return this.httpClient.get<User>(this.apiURL+`get-user/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
/*   find(id: number): Observable<User> {
    return this.httpClient.get<User>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  } */

/*   update(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>(this.apiURL + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } */

/*   delete(id: number){
    return this.httpClient.delete<User>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } */

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
