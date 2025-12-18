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



