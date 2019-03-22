import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ROOT = 'http://localhost:8081/api';

  API = {
    MOVIE_LIST: () => `${this.API_ROOT}/movie${this.getSessionId()}`,

    MOVIE: (movieId) => `${this.API_ROOT}/movie/${movieId}${this.getSessionId()}`,

    USER_CURRENT: () => `${this.API_ROOT}/user/current/${this.getSessionId()}`,

    LOGIN: (username, password) => `${this.API_ROOT}/login?name=${username}&password=${password}`
  };


  constructor(private cookieService: CookieService) {
  }

  getSessionId() {
    return '?sessionId=' + this.cookieService.get('sessionNG');
  }

}
