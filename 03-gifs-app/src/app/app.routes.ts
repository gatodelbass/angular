import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),

    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending/trending'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search/search'),
      },
       {
        path: 'history/:query',
        loadComponent: () => import('./gifs/pages/gifs-history/gifs-history'),
      },
      {
        path: '**',
        loadComponent: () => import('./gifs/pages/trending/trending'),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
