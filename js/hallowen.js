function comprarItem(){
 let estoque =10;

 let full= "Estoque cheio";

     if( estoque >=10){
    let cafe = "cafe comprado com sucesso";
    document.getElementById("mensagem").textContent = cafe;
     mensagem.style.color = "green";

     } else if(estoque ===0){
        let erro ="Fora de estoque";
        document.getElementById("mensagem").textContent = erro;
        mensagem.style.color = "red";
          
     }
}



function comprarItem2(){
 let estoque =10;

 let full= "Estoque cheio";

     if( estoque >=10){
    let cafe = "cafe comprado com sucesso";
    document.getElementById("mensagem2").textContent = cafe;
     mensagem2.style.color = "green";

     } else if(estoque ===0){
        let erro ="Fora de estoque";
        document.getElementById("mensagem2").textContent = erro;
        mensagem2.style.color = "red";
          
     }
}
