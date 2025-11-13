
function  adicionarTarefa(){
let mensagem = "tarefa adicionada com sucesso!";

 let inputTarefa = document.getElementById("inputTarefa")
  
  let tarefa = inputTarefa.value;


  if(tarefa ===""){
   let mensagemErro = "Erro: por favor, digite uma tarefa válida.";
   document.getElementById("mensagem").textContent = mensagemErro
     return
  } else{
let mensagemSucesso = "tarefa adicionada com sucesso!";
  
    document.getElementById("mensagem").textContent = mensagemSucesso;
    return
  }

 
 let listaTarefas = document.getElementById("listaTarefas")
 
 let novaTarefa= document.createElement("li")
 
 novaTarefa.textContent = tarefa

    listaTarefas.appendChild(novaTarefa)




 inputTarefa.value = "";

}




//console.log(); mostra se o codigo foi executado corretamente.