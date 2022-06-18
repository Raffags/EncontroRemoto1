//cadastro de peças onde : o peso da peça precisa ser maior do que 100, o numero de peças menor ou igual a 10 e ter um nome maior do que 3 caracteres.
let entrada= require("readline-sync")

let listaPecas = entrada.question("Qual a quantidade de peças deseja cadastrar ? ") ;

let peso = entrada.question("Qual peso do produto que deseja cadastrar ? ");
let nomePeca = entrada.question("Qual nome da peça ? ");

if (peso >= 100){
    console.log("peso necessário para cadastrar aceito.");}
 else { console.log ("peso menor do que o necessário para cadastro");

 }    

if (listaPecas >=10) {
    console.log("Quantidade de itens excede o valor aceito");    
}
 else {console.log ("quantidade necessária para cadastro aceito");

 }
if (nomePeca.length < 3 ){ console.log("nome inválido, deve possuir mais de 3 caracteres");
}
else{ console.log ("Nome válido.");

}