import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {User} from '../data/user';
import {CookieService} from 'ngx-cookie-service';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(private httpService: HttpService,
              private cookieService: CookieService,
              private apiService: ApiService) {
  }

  getCurrentUser() {
    this.httpService.get<User>(this.apiService.API.USER_CURRENT()).subscribe(value => this.user = value);

    return this.user;
  }

  login(username, password) {
    alert('i got here');
    this.httpService.post<object>(this.apiService.API.LOGIN(username, password)).subscribe(
      value => console.log(value),
      error => this.cookieService.set('sessionNG', error.error.text)
    );
  }
}
