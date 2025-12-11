import { Component, input, output, Output, signal } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  nuevoPersonajeOutput = output<Personaje>();

  addPersonaje() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    const nuevoPersonaje: Personaje = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.nuevoPersonajeOutput.emit(nuevoPersonaje);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
