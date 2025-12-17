import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import GifGallery from '../../components/gif-gallery/gif-gallery';

import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { GifOld } from '../../interfaces/gif.old.interface';

@Component({
  selector: 'app-trending',
  imports: [GifGallery],
  templateUrl: './trending.html',
})
export default class TrendingPage {
  // gifs = signal<GifOld[]>([
  //   {
  //     id: 1,
  //     name: 'GT 4',
  //     image: 'https://media.falabella.com/falabellaCO/72871006_1/w=800,h=800,fit=pad',
  //   },
  //   {
  //     id: 2,
  //     name: 'S24',
  //     image: 'https://www.clevercel.co/cdn/shop/files/Portadas_SamsungS24.webp?v=1757092938',
  //   },
  //    {
  //     id: 3,
  //     name: 'VOLT 2',
  //     image: 'https://bimotordj.com/image/cache/catalog/VOLT2/Universal%20Audio%20Volt%202%20USB%20Recording%20Studio%20(1)-1200x1200.jpg',
  //   },
  // ]);

  gifService =  inject(GifService);


}
