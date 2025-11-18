
const skills: string[] = ['bash', 'counter', 'healing'];


interface Character {
    name:string;
    hp:number;
    skills: string[];
    hometown?: string;  // con el interrogante es un astributo opcional

}



const strider:Character = {
    name: "strider",
    hp: 100,
    skills: ["bash", "counter"],
     
}

strider.hometown = "Rivenrage";


console.log(strider);


export {};
