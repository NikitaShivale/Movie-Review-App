import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie.model';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-movie-details',
  template: `
  <div class="panel panel-default">
  <div class="body-container">
  <div class="example-card">
    <mat-card-content>
      <div class="row col-lg-12">
      <div class="col-lg-6 col-md-6 col-sm-6 align-center">
        <img mat-card-image class="card-image img-responsive img-thumbnail" src="{{movie.imagePath}}" alt="Photo of a Shiba Inu">
      </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="align-center movie-info">
                <span class="movie-title">{{movie.title}}</span>
            </div>
          
          <h5>Movie Description: <br><br>
            {{movie.description}}<br><br>
          </h5>
          <h4>Rating: {{movie.rating}}<br></h4>
          <h4>Comments: Great Movie!<br>Must Watch !!</h4>
        </div>
      </div>
    </mat-card-content>
  </div>
</div>
  `,
  styles: [`
  .example-card {
    padding: 10px;
  }
  .align-center {
    text-align: center;
  }
  .movie-info {
    margin-bottom: 20px;
  }
  .card-image{
    height: 300px !important;
    width: 250px !important;
  }
  .movie-title {
    font-size: 30px;
    font-weight: 600;
    margin-top: 15px;
  }
  .card-actions {
    margin-top: 50px;
  }
  `]
})
export class MovieItemDetailsComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private catalogService: MoviesService, private cartService: CartService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['id'];
    this.movie = this.catalogService.findMovieByName(name);
  }

  handleAddToCartClick() {
    this.cartService.addMovieToCart(this.movie);
  }

}
