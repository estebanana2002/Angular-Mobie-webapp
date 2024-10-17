import { Routes } from '@angular/router';

export const movies_routes: Routes = [
  {
    path: 'movies',
    loadComponent: () => import('../movie/main/main.component').then(m => m.MainComponent),
    children: [
      {
          path: 'home',
          loadComponent: () => import('../../features/land/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'movies-list',
        loadComponent: () => import('../../features/movies/views/list-movies/list-movies.component').then(m => m.ListMoviesComponent)
      },
      {
          path: '**',
          redirectTo: 'home',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'movies',
  }
];
