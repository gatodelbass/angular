import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterOutlet],

  templateUrl: './side-menu-options.html',
})
export default class SideMenuOptions {}
