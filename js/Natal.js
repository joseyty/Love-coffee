function comprarItem(){
 let estoque =10;

 let full= "Estoque cheio";

     if( estoque >=10){
    let cafe = "Bolo comprado com sucesso";
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

   if( estoque >=10){
   
    let certo= "Bolo comprado com sucesso";
    document.getElementById("mensagem2").textContent= certo;
    mensagem2.style.color= "green";

   } else if(estoque ===0){
      let error= "fora de estoque";
      document.getElementById("mensagem2").textContent= error;
      mensagem2.style.color="red";
   }


   
}



function comprarItem3(){
 let estoque= 10;

   if(estoque>=10){
      let certo= "Bolo comprado com sucesso";
      document.getElementById("mensagem3").textContent= certo;
      mensagem3.style.color="green";
   } else if(estoque===0){
      let erro= "Fora de estoque";
      document.getElementById("mensagem3").textContent= erro;
      mensagem3.style.color="red";
   }



}
