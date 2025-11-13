
function  adicionarTarefa(){
  let inputTarefa = document.getElementById("inputTarefa")
  let tarefa = inputTarefa.value;

  let mensagem = document.getElementById("mensagem")
  
  if(tarefa ===""){
   let mensagemErro = "Erro: por favor, digite uma tarefa válida.";
   mensagem.textContent = mensagemErro
      return
  } else{
   let mensagemSucesso = "tarefa adicionada com sucesso!";
   mensagem.textContent = mensagemSucesso;
   let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa= document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)

  }

 




 inputTarefa.value = "";

}




//console.log(); mostra se o codigo foi executado corretamente.