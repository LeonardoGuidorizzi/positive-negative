function positiveNegative(e){
  const  numero = parseInt(document.getElementById("numero").value)
  const resultado = document.getElementById("result")
  if (numero > 0){
    resultado.textContent = numero
  }else{
    resultado.textContent = numero * -1
  }
  
}
const button = document.getElementById("calcular")
button.addEventListener("click",positiveNegative)