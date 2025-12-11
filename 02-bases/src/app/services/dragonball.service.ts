import { effect, Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

const loadFromLocalStorage = (): Personaje[] => {
  const personajes = localStorage.getItem('personajes');

  return personajes ? JSON.parse(personajes) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  constructor() {}

  personajes = signal<Personaje[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log(`el conteo de personajes  ${this.personajes().length}`);
    localStorage.setItem('personajes', JSON.stringify(this.personajes()));
  });

  addPersonaje(newPersonaje: Personaje) {
    this.personajes.update((list) => [...list, newPersonaje]);
  }
}
