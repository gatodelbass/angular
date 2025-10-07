import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  cost: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  

  private products: Product[] = [
    {
      id: 1,
      name: 'Vstrom 250',
      description: 'casi es una doble proposito',
      cost: 16500000,
      image: 'bikes/V-STROM-250-SX-AMARILLA.png',
    },
    {
      id: 2,
      name: 'Gixxer 150 SF',
      description: 'la mejor 150 del segmento',
      cost: 13100000,
      image: 'bikes/1385-X-800-BASE-GIXXER--SF-FI-ABS-BLANCA-AZUL.png',
    },

    {
      id: 3,
      name: 'GSXR 150',
      description: 'la moto mas rapida de 150cc',
      cost: 14250000,
      image: 'bikes/gsx-r-150-roja.png',
    },
  ];

  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }
}
