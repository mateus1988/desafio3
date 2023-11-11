class heroi{
    constructor( nome , idade , tipo){
       this.nome = nome
       this.idade = idade
       this.tipo = tipo
     
}
atacar(){
     let ataque = "";

     switch (this.tipo) {
        case "guerreiro":
           ataque = "a espada";
           break;
       case "mago":
         ataque = "a magia";
         break;
       case "monge":
         ataque = "as artes marciais";
         break;
       case "ninja":
         ataque = "as shuriken";
         break;
     }

   console.log(`O ${this.tipo}  com o nome de ${this.nome} , com ${this.idade} anos de vida,  atacou usando ${ataque}`)
}
}

let mago  = new heroi ("Magão", 300,"mago")
let  guerreiro  = new heroi (" Guerreirão",35,"guerreiro")
let monge  = new heroi (" Mongão",70,"monge")
let ninja  = new heroi ("Ninjão",25, "ninja")

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()