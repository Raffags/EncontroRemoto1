//cadastro de peças onde : o peso da peça precisa ser maior do que 100, o numero de peças menor ou igual a 10 e ter um nome maior do que 3 caracteres.


let listaPecas = 9 ;

let peso = 50;
let nomePeca = "pc";

if (peso >= 100){
    console.log("peso necessário para cadastrar aceito.");}

if (listaPecas >=10) {
    console.log("Quantidade de itens excede o valor aceito");
    
}
if (nomePeca.length < 3 ){ console.log("nome inválido, deve possuir mais de 3 caracteres");
}