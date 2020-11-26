var elemBotaoEnviar = document.getElementById("botaoEnviar")
var elemNomeUsuaria = document.getElementById("nome-da-usuaria")
var elemEmailUsuaria = document.getElementById("email-da-usuaria")
var elemTelUsuaria = document.getElementById("telefone-da-usuaria")

elemBotaoEnviar.addEventListener("click", envioFormulario) 

function envioFormulario() {
  if (elemNomeUsuaria.value != "" && elemEmailUsuaria.value != "" && elemTelUsuaria.value != "") {
    alert("Prontinho! Você receberá no seu email! ")
    elemNomeUsuaria.value = ""
    elemEmailUsuaria.value = ""
    elemTelUsuaria.value = ""
  } else {
    alert("Por favor, preencha os campos nome e email")
  }
}