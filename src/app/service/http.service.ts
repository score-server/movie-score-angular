import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get<g>(url: string) {
    return this.http.get<g>(url);
  }

  post(url: string) {
    return this.http.post(url, null);
  }

}
