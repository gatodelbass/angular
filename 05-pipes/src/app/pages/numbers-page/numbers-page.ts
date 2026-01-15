import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NumbersPage { 

  totalSell = signal(2350500.5567)
  percentSell = signal(0.4856)

}
