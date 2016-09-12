function calcularIMC(){

    var formulario = document.getElementById("formulario");

    var kilos = parseInt(formulario.kilos.value);
    var metros = parseInt(formulario.metros.value);
    var cm = parseInt(formulario.cm.value);

    var altura = ((metros * 100) + cm)/100;

    var imc = kilos / (altura * altura);

    //toFixed arrendondando os valores pós virgula
    formulario.imc.value = imc.toFixed(2);

    console.log(kilos);
}