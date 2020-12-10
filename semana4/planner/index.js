function criarTarefa() {
    let campoTarefa = document.getElementById("tarefa")
    let diasSemana = document.getElementById("dias-semana")
    
    if (campoTarefa.value === "") {
        alert("Digite uma tarefa válida!")
    } else {
        let novaTarefa = document.getElementById(diasSemana.value)
        novaTarefa.innerHTML += `<p>${campoTarefa.value}</p>`
        campoTarefa.value = ""
    }
}
