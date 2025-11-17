// Carrega tarefas ao iniciar a página
document.addEventListener("DOMContentLoaded", carregarTarefas);

function adicionarTarefa(){
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value;

  const mensagem = document.getElementById("mensagem");
  
  if(tarefa === ""){
    mensagem.textContent = "Erro: por favor, digite uma tarefa válida.";
    mensagem.style.color = "red";
    return;
  } else if(tarefa.length >= 20){
    mensagem.textContent = "Erro: a tarefa deve ter no mínimo 20 caracteres. Agora, ela tem " + tarefa.length + " caracteres.";
    mensagem.style.color = "red";
    return;
  } else {
    mensagem.textContent = "Tarefa adicionada com sucesso!";
    mensagem.style.color = "green";

    adicionarNaLista(tarefa);
    salvarTarefa(tarefa);
  }

  inputTarefa.value = "";
}

function adicionarNaLista(tarefa) {
  const listaTarefas = document.getElementById("listaTarefas");
  const novaTarefa = document.createElement("li");
  novaTarefa.textContent = tarefa;
  listaTarefas.appendChild(novaTarefa);
}

// Salva no localStorage
function salvarTarefa(tarefa) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Carrega ao abrir a página
function carregarTarefas() {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.forEach(tarefa => adicionarNaLista(tarefa));
}


//console.log(); mostra se o codigo foi executado corretamente.