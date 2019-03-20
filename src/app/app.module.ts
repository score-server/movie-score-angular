import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MovieComponent} from './movie/movie.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MovieCardComponent} from './shared/movie-card/movie-card.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movie/:id', component: MovieComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    NavigationComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
