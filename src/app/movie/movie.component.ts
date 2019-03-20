import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../data/movie';
import {HttpService} from '../service/http.service';
import Api from '../service/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  private movieId: number;
  movie: Movie;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
    });
  }

  ngOnInit() {
    this.httpService.get<Movie>(Api.MOVIE(this.movieId)).subscribe(value => {
      console.log(value);
      this.movie = value;
      console.log(this.movie);
      return this.movie;
    });
  }

}
