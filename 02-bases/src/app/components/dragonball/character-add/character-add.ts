import { Component, input, signal } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  addPersonaje() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: 1000,
      name: this.name(),
      power: this.power(),
    };

    // this.personajes().push(nuevoPersonaje); // no recomendado cuando es un array tipo signal

    //this.personajes.update((list) => [...list, nuevoPersonaje]);
    console.log({nuevoPersonaje});
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  
}
