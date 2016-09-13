//Indices
//lenght = tamanho do array
//indexOf = retorna o index de um array
//lastIndexOf = retorna o index da ultima ocorrencia de um elemtento dentro do array
//Arrays Indexados - onde cada elemento tem uma posição começando no zero, um ...
var paises = new Array("Brasil","Rússia","Índia","China");

//alert(paises);
//alert(paises[0]);
//alert("Índice do elemento é = " + paises.indexOf("Brasil"));

var estados = new Array();
estados[0] = "SP";
estados[1] = "SC";

//Ordenação
//reverse() = reverte a order do array

alert(estados.reverse());
//sort() = ordena em ordem alfabética

alert(estados.sort());

//Cortes e Emendas
//join() = muda o separador padrão , por qualquer outra coisa
alert(estados.join(";"));

//concat() = concatena os arrays

//slice() = divide o array apatir de uma posição
alert(estados.slice(1));

//splice() = remove um elemento e adiciona em outro lugar
alert(paises.splice(1,1,"teste", "teste2"));
alert(paises);


//Filas FIFO

// push = adiciona elementos no final da fila
paises.push("oceano");
alert(paises);

// pop = remove o último elemento da fila
paises.pop();
alert(paises);

// shift = remove o primeiro elemento da fila
paises.shift();
alert(paises);

// unshift = adiciona elemento no inicio da fila
paises.unshift("oceano");
alert(paises);
