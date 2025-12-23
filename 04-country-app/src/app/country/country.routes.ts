import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCountry } from './pages/by-country/by-country';
import { ByRegion } from './pages/by-region/by-region';
import { CountryPage } from './pages/country-page/country-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        component: ByCountry,
      },
      {
        path: 'by-region',
        component: ByRegion,
      },
      {
        path: 'by/:code',
        component: CountryPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
