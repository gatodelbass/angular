import {  Component, input } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html', 
})
export class CharacterList { 

  personajes = input.required<Personaje[]>();
  listName = input.required<string>();

}
