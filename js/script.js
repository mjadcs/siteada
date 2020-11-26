document.getElementById("botaoEnviar").addEventListener("click", envioFormulario) 

function envioFormulario(){

  if(document.getElementById("nome-da-usuaria").value != "" &&
  document.getElementById("email-da-usuaria").value != "" &&
  document.getElementById("telefone-da-usuaria").value != ""){
      alert("Prontinho! Você receberá no seu email! ")
  }else{
      alert("Por favor, preencha os campos nome e email")
  }
}