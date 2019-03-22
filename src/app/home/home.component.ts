import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';
import {Movie} from '../data/movie';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: Movie[];

  constructor(private httpService: HttpService, private apiService: ApiService) {
  }

  ngOnInit() {
    this.httpService.get<Movie[]>(this.apiService.API.MOVIE_LIST()).subscribe(value => {
      this.movieList = value;
      console.log(this.movieList);
      return this.movieList;
    });
  }

}
