// nota: en el archivo 06-function-destructuring.ts se exporta la interfaec producto para que pueda ser incluida aqui

import { Product, taxCalc } from "./06-function-destructuring";

const shoppingCard: Product[] = [
  { description: "asus zenfone", price: 2500 },
  { description: "gogle pixel 3", price: 3500 },
  { description: "moto razr 60", price: 3900 },
  { description: "pco f9 pro", price: 2900 },
];

const [total, tax] = taxCalc({
  products: shoppingCard,
  tax: 0.12,
});

console.log("total 07 ", total);
console.log("tax 07", tax);

export {}; // transforma este archivo en un modulo, en este caso, se exporta un objeto vacio
// exportar es habilitar objetos o elementos a un scope externo al archivo
