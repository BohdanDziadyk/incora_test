import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  logIn(user): Observable<User>{
    return this.httpClient.post<User>('http://localhost:8000/login/', user)
  }
}

