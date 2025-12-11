import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
})
export class DragonballSuper {
  public dragonballService = inject(DragonballService);

  // name = signal('');
  // power = signal(0);

  // //todo esto se movio al servicio dragonball
  // // personajes = signal<Personaje[]>([
  // //   {
  // //     id: 1,
  // //     name: 'Goku',
  // //     power: 9001,
  // //   },
  // //   {
  // //     id: 2,
  // //     name: 'Vegeta',
  // //     power: 8001,
  // //   },
  // // ]);

  // // addPersonaje(newPersonaje: Personaje) {
  // //   this.personajes.update((list) => [...list, newPersonaje]);
  // //   this.resetFields();
  // // }

  // resetFields() {
  //   this.name.set('');
  //   this.power.set(0);
  // }
}
