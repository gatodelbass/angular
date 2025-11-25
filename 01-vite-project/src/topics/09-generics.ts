
//los genericos permiten determinar el tipo de dato
// el primer generico es la T por estandar, entonces <T> define una fucnion generica
// a primera vista parece que sirve para volver mas generica una funcion, ya que la misma funcion puede recibir y retornar distintos tipos de datos, 
//haciendo una declaracion dinamica del tipo de dato que se quiere trabajar cuando se llama al metodo.


export function whatsMyType<T>(arg:T):T{

    return arg;
}


let apellido = whatsMyType<string>("homa mungdo");
let edad = whatsMyType<number>(35);
let fruits = whatsMyType(["pera", "papaya", "mango"]);

console.log(apellido);
console.log(edad);
console.log(fruits);