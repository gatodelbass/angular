export class Person {
  // modo 1 para definir properties y constructor
  /*
    public name:string;
    public address:string;

    constructor(name:string, address:string){
        this.name = name;
        this.address = address;
    }   
    */

  //modo corta de definir clases en typescript

  constructor(public name: string, private address: string = "No address", private id:number) {
    this.name = name;
    this.address = address;
    this.id - id;

  }
}

// export class Hero extends Person{
//     constructor(
//         public nickname:string,
//         public age:number,
//         public realName:string
//     ){
//         super(realName, "gotic city");
//     }
// }



//ejemplo de composicion en vez de utilizar herencia y el extends
export class Hero {   

    constructor(
        public nickname:string,
        public age:number,
        public realName:string,
        public person:Person,
    ){
        this.person = new Person(realName, "santa monica", 2422341)
    }
}



const tony = new Person("stark", "NY", 2422341);
const ironman = new Hero("Ironman", 45, "tony stark", tony);

console.log(tony);
console.log(ironman);
