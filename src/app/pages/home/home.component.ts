import { Component } from '@angular/core';
import { Review, REVIEWS } from 'src/app/mocks/reviews.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reviews: Review[] = REVIEWS;
}
