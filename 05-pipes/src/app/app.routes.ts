import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'pipes basicos',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'numbers',
    title: 'pipes numbers',
    loadComponent: () => import('./pages/numbers-page/numbers-page'),
  },
  {
    path: 'uncommon',
    title: 'pipes uncommon',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: 'custom',
    title: 'pipes custom',
    loadComponent: () => import('./pages/custom-page/custom-page'),
  },
    {
    path: '**',
    redirectTo:"basic"
  },
];
