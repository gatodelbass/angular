import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { Dragonball } from './pages/dragonball/dragonball';
import {  DragonballSuper } from './pages/dragonball-super/dragonball-super';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },

  {
    path: 'dragonball',
    component: Dragonball,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuper,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
