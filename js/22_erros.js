//Tratando exceção
try{
    var x = a;
    var b = x + 10;
    alert(b);
}catch(e){
    alert(e.name + " / " + e.message);
}finally{
    alert("Estrutura finally");
}


//Lançando exceção e tratando
var x = prompt("Informe um numero maior que 10");
try{
    if(x < 10){
        throw "O número é maior que 10!!";
    }
    alert(x);
}catch(e){
    alert(e);
}finally{
    
}



//with
var Carro = {
    marca: "Nissam",
    Modelo: "tiida",
    comprimento: "2,70",
    potencia: {
        velocidade: "180 km/h",
        cavalos: "300"
    }
};

with (Carro.potencia){
    alert(cavalos);
    alert(velocidade);
}