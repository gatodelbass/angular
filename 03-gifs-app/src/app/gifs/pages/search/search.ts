import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import GifGallery from '../../components/gif-gallery/gif-gallery';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GifGallery],
  templateUrl: './search.html',
})
export default class SearchPage {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
      console.log(resp);
    });
  }
}
