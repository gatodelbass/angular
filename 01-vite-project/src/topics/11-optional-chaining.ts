export interface Passenger {
  name: string;
  children?: string[];
}

const pasajero1: Passenger = {
  name: "Lolo",
};

const pasajero2: Passenger = {
  name: "Raul",
  children: ["jose", "miguel"],
};

const printChildren = (pasajero: Passenger) => {
  const howManyChildren = pasajero.children?.length || 0;

  console.log(howManyChildren);
};

printChildren(pasajero1);
