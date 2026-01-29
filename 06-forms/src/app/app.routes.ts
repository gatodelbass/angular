import { Routes } from '@angular/router';
import { reactiveRoutes } from './reactive/reactive.routes';
import { countryRoutes } from './country/country.routes';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.routes').then((module) => reactiveRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes').then((module) => countryRoutes),
  },
  {
    path: '**',
    redirectTo: 'reactive',
  },
];
