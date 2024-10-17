import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { movies_routes } from '../movie.routes';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
}
