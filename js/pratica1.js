
function  adicionarTarefa(){
  const inputTarefa = document.getElementById("inputTarefa")
  let tarefa = inputTarefa.value;

  const mensagem = document.getElementById("mensagem")
  
  if(tarefa ===""){
   let mensagemErro = "Erro: por favor, digite uma tarefa válida.";
   mensagem.textContent = mensagemErro
   mensagem.style.color = "red"
      return
  } else{
   let mensagemSucesso = "tarefa adicionada com sucesso!";
   mensagem.textContent = mensagemSucesso;
   mensagem.style.color = "green"
   const listaTarefas = document.getElementById("listaTarefas")
    const novaTarefa= document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)

  }

 




 inputTarefa.value = "";

}




//console.log(); mostra se o codigo foi executado corretamente.