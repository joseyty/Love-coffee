
function  adicionarTarefa(){
let mensagem = "tarefa adicionada com sucesso!";

 let inputTarefa = document.getElementById("inputTarefa")
  
  let tarefa = inputTarefa.value;

 
 let listaTarefas = document.getElementById("listaTarefas")
 
 let novaTarefa= document.createElement("li")
 
 novaTarefa.textContent = tarefa

    listaTarefas.appendChild(novaTarefa)


 
    document.getElementById("mensagem").textContent = mensagem;

 inputTarefa.value = "";

}




//console.log(); mostra se o codigo foi executado corretamente.