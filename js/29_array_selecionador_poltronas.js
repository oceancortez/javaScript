// Cinema-baladinha

//disponivel = true || indisponivel = false

// Carrega o java script depois do html
window.onload = function(){
    carregarPoltronas();
}


var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas(){
    var imagens = document.getElementsByTagName("img");

    for (var i = 0; i < imagens.length; i++) {
        if(poltronas[i]){
        imagens[i].src = "/home/ocortez/apps/javaScript/images/poltrona_disponivel.jpeg";
        }else{
            imagens[i].src = "/home/ocortez/apps/javaScript/images/poltrona_indisponivel.png";
        }
        
    }
}

function selecionarPoltrona(){

     var imagens = document.getElementsByTagName("img");

    for(var i = 0; i < poltronas.length; i++){
        if(poltronas[i]){
            imagens[i].src = "/home/ocortez/apps/javaScript/images/poltrona_selecionada.png";
            var quer =  confirm("Você quer esta Poltrona?");
            if(quer){
                break;
            }else{
                imagens[i].src = "/home/ocortez/apps/javaScript/images/poltrona_disponivel.jpeg";
            }
            
        }
    }

}

function selecionarPoltronaCasal(){

     var imagens = document.getElementsByTagName("img");

    for(var i = 0; i < poltronas.length; i++){
        if(poltronas[i] && poltronas[i+1]){
            imagens[i].src = "/home/ocortez/apps/javaScript/images/poltrona_selecionada.png";
            imagens[i+1].src = "/home/ocortez/apps/javaScript/images/poltrona_selecionada.png";
            var quer =  confirm("Você quer estas Poltronas?");
            if(quer){
                break;
            }else{
                imagens[i].src = "/home/ocortez/apps/javaScript/images/poltrona_disponivel.jpeg";
            }
            
        }
    }


}