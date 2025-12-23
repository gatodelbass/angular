import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';

@Component({
  selector: 'app-by-region',
  imports: [CountryList],
  templateUrl: './by-region.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegion {}
