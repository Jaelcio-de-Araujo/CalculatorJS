// Função que captura numeros.
// e em seguida os coloca no display
function capturaNumero(numero) {
  document.getElementById("display")
  if (display.value.length < 10) {
    display.value += numero;
    console.log(numero);
  }
}

// Função que captura a Operação
// e permite adicionar mais numeros.
function capturaOperacacao(operacao){
  document.getElementById("display")
  display.value += operacao
  console.log(operacao)
}

// Deixa o displa limpo
function limpaDisplay() {
  document.getElementById("display").value = ''
}

// Calcula o resultado
function calculaResultado(){
  let formula = document.getElementById("display").value
  if(formula) {
    document.getElementById("display").value = eval(formula)
  } else{
    document.getElementById("display").value = 'Sem valores para cálcular.'
  }
}

