function comprarItem(){
  let estoque = 5;
    if (estoque > 0) {
        let fora = "fora de estoque";
        document.getElementById("mensagem").textContent = fora;
        mensagem.style.color = "red";
} else if(estoque <=0){
 let dentro = "item comprado com sucesso";
 document.getElementById("mensagem").textContent = dentro;
 mensagem.style.color = "green";


}

}


function comprarItem1(){
  let estoque = 5;
    if (estoque > 0) {
        let fora = "fora de estoque";
        document.getElementById("mensagem2").textContent = fora;
        mensagem2.style.color = "red";
} else if(estoque <=0){
 let dentro = "item comprado com sucesso";
 document.getElementById("mensagem2").textContent = dentro;
 mensagem2.style.color = "green";

}

}