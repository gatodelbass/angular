import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Personaje {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {
  name = signal('Krilin');
  power = signal(1560);

  personajes = signal<Personaje[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
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

   this.personajes.update((list) => [...list, nuevoPersonaje]);
   this.resetFields();

  }

  resetFields(){
    this.name.set("");
    this.power.set(0);
  }
}
