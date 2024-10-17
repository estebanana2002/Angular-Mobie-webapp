import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Movie } from '../../../../data/interfaces/movie/movie';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { register } from 'swiper/element/bundle';
import { MovieCardComponent } from "../movie-card/movie-card.component";
// register Swiper custom elements
register();

@Component({
  selector: 'app-movie-carrousel',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-carrousel.component.html',
  styleUrl: './movie-carrousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieCarrouselComponent {
  @Input({required: true}) movies!: Movie[];
  @Input({required: true}) title!: string;
}
