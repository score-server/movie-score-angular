import {Genre} from './genre';

export class Movie {
  id: number;
  title: string;
  genres: Genre[];
  year: number;
  voteAverage: number;
  broken: boolean;
  caseImg: string;
  backgroundImg: string;
  descript: string;
  filetype: string;
  popularity: number;
  quality: string;
  runtime: number;
  timestamp: string;
  tmdbId: number;
  trailerKey: string;

}
