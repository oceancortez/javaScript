for(var i= 0; i <= 3; i++){
    alert(i);
}


var numeros = new Array("um","dois","tres");

alert("Total de elementos =" + numeros.length);

alert("Primeiro  elemento =" + numeros);


var Carro = {
    marca: "Nissam",
    Modelo: "tiida",
    comprimento: "2,70",
    velocidade: "180 km/h"
};

for (var propriedades in Carro){
    alert(propriedades + "=" + Carro[propriedades]);
}


do{
alert("teste do{}while(){}")
}while (false) {
    
}