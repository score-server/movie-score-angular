import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';
import {Movie} from '../data/movie';
import Api from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: Movie[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.get<Movie[]>(Api.MOVIE_LIST()).subscribe(value => {
      console.log(value);
      this.movieList = value;
      console.log(this.movieList);
      return this.movieList;
    });
  }

}
