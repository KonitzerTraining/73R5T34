import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { User } from '../model/user';
import { LoginData } from '../model/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getUser(logindata: LoginData):Observable<User> {
    console.log(logindata);
    return of({ id: 1, username: 'admin' })
    .pipe(
      delay(1000)
    )
  }
}
