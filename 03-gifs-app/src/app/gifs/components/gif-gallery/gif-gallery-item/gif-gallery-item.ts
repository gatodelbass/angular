import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';
import { GifOld } from 'src/app/gifs/interfaces/gif.old.interface';

@Component({
  selector: 'gif-gallery-item',
  imports: [],
  templateUrl: './gif-gallery-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifGalleryItem {
  gif = input.required<Gif>();
}
