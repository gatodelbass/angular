import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

interface Personaje {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
})
export class DragonballSuper {
  name = signal('');
  power = signal(0);

  personajes = signal<Personaje[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8001,
    },
  ]);

  addPersonaje() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: this.personajes.length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.personajes().push(nuevoPersonaje); // no recomendado cuando es un array tipo signal

    //this.personajes.update((list) => [...list, nuevoPersonaje]);
    console.log(nuevoPersonaje);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
