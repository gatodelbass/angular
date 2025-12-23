import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryTopMenu } from "../../components/footer/top-menu/country-top-menu";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, CountryTopMenu],
  templateUrl: './country-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryLayout { }
