import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [RouterOutlet],

  templateUrl: './side-menu-header.html',
})
export default class SideMenuHeader {}
