//Array Multidimensional

var pessoas = new Array();
pessoas[0] = new Array("Ricardo", "M");

//Pegando o segundo elemento do array 
alert(pessoas[0][1]);

alert(pessoas[0]);


var person = [
    ["Ricardo", "M"],
    ["Uno", "Fiat"]
    ];
//Pegando o segundo elemento do array 
alert(pessoas[0][1]);


//Array Associativo 
// Quando um elemento do array é referenciado por um nome 
// Utilizamos chaves

var pessoa = {
    nome: "Beatriz", cidade: "Brasilia"
}; 

alert(pessoa.nome);

//Array Funções
var frutas = ["Abacaxi", "Banana", "Cebola"];

function todos(elem, ind, obj){
    return (typeof elem == "string");
}

//every() Verifica se todos os elementos satifaz uma condição
alert(frutas.every(todos));

//some() Verifica se pelo menos um elemento satifaz uma condição

alert(frutas.some(todos));
//filter() Faz um filtro



//map() utilizado para alterar todos os elementos de um array

function todos(elem, ind, obj){
    return (elem = elem.toUpperCase());
}

alert(frutas.map(todos));
