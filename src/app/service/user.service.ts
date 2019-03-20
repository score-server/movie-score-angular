import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import Api from './api.service';
import {User} from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) {
  }

  getCurrentUser() {
    return this.httpService.get<User>(Api.USER_CURRENT());
  }
}
