import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import GifGallery from '../../components/gif-gallery/gif-gallery';

@Component({
  selector: 'app-gifs-history',
  imports: [GifGallery],
  templateUrl: './gifs-history.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifsHistory {
  gisfService = inject(GifService);
  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

  gifsByKey = computed(() => {
    return this.gisfService.getHistoryGifs(this.query());
  });
}
