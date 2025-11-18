function addNumbers(a: number, b: number) {
  const result: number = a + b;
  return result;
}

const addNumbersArrow = (a: number, b: number): number => {
  const result: number = a + b;
  return result;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  //firstnumber es siempre obligatorio, secondNumber es opcional y base tiene un valor por defecto
  return firstNumber * base;
}

interface Character {
  name: string;
  hp: number;
  showHp: () => void; //funcion flecha con el tipo de valor de retorno
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
  if (character.hp > 100) {
    character.hp = 100;
  }
};

const yoyo: Character = {
  name: "Yonyo",
  hp: 52,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(yoyo, 8);

//console.log(addNumbers(20,2));
//console.log(addNumbersArrow(20,20));
//console.log(multiply(20,20, 3));
yoyo.showHp();

export {};
