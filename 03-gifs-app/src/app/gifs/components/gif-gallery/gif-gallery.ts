import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import GifGalleryItem from './gif-gallery-item/gif-gallery-item';
import { GifOld } from 'src/app/gifs/interfaces/gif.old.interface';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-gallery',
  imports: [GifGalleryItem],
  templateUrl: './gif-gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifGallery {

  gifs = input.required<Gif[]>();
 }
