export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "moto g5",
  price: 500,
};

const tablet: Product = {
  description: "opad",
  price: 2500,
};

export interface TaxCalcOptions {
  tax: number;
  products: Product[];
}

export function taxCalc(options: TaxCalcOptions): number[] {
  let total = 0;
  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const shoppingCard = [phone, tablet];
const tax = 0.15;

const result = taxCalc({
  products: shoppingCard,
  tax,
});

console.log("total ", result[0]);
console.log("tax ", result[1]);

export {
  
};
