import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
];
