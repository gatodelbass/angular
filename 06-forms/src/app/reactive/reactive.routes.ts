import { Routes } from '@angular/router';
import { BasicPage } from './pages/basic-page/basic-page';
import { DynamicPage } from './pages/dynamic-page/dynamic-page';
import { SwitchesPage } from './pages/switches-page/switches-page';

export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'basicos',
        component: BasicPage,
      },
      {
        path: 'dynamic',
        title: 'dinamicos',
        component: DynamicPage,
      },
      {
        path: 'switches',
        title: 'switches',
        component: SwitchesPage,
      },
      {
        path: '**',
        redirectTo: 'basic',
      },
    ],
  },
];
