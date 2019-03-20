import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import Api from './api.service';
import {User} from '../data/user';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(private httpService: HttpService, private cookieService: CookieService) {
  }

  getCurrentUser() {
    this.httpService.get<User>(Api.USER_CURRENT()).subscribe(value => this.user = value);

    return this.user;
  }

  login(username, password) {
    this.httpService.get<string>(Api.LOGIN(username, password)).subscribe(
      value => this.cookieService.set('sessionId', value)
    );
  }
}
