import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../app/layouts/movie/movie.routes').then(m => m.movies_routes)
    }
];
