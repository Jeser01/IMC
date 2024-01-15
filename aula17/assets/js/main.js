import Imc from './Imc.js';
import Pessoa from './Pessoa.js';

function meuEscopo() {
  const form = document.querySelector("#form");
  
  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = document.querySelector("#nome").value;
    console.log(nome);
    const sobrenome = document.querySelector("#sobrenome").value;
    console.log(sobrenome);
    const peso = parseFloat(document.querySelector("#peso").value); // Converter para número
    console.log(peso);
    const altura = parseFloat(document.querySelector("#altura").value); // Converter para número
    console.log(altura);
    
    const pessoa = new Pessoa (nome, sobrenome, peso, altura);
    
    const imc = new Imc();
    
    const resultIMC = imc.calcularIMC(peso,altura);
    
    const resultadoDiv = document.querySelector("#resultado");
    
    resultadoDiv.innerHTML = '';

    if(resultIMC < 18.5){
      resultadoDiv.innerHTML += `<p style="font-size: 0.7em; background-color: #FF0000; padding: 10px;">${pessoa.nome}, seu IMC é de ${resultIMC.toFixed(2)} (Abaixo do peso)</p>`;
    }else if(resultIMC >= 18.5 && resultIMC <= 24.9){
      resultadoDiv.innerHTML += `<p style="font-size: 0.7em; background-color: #00FF7F; padding: 10px;">${pessoa.nome}, seu IMC é de   ${resultIMC.toFixed(2)} (Peso normal) </p>`;
    }else if(resultIMC >= 25 && resultIMC <= 29.9){
      resultadoDiv.innerHTML += `<p style="font-size: 0.7em; background-color: #FFA500; padding: 10px">${pessoa.nome}, seu IMC é de   ${resultIMC.toFixed(2)} (Acima do peso) </p>`;
    }else if(resultIMC >= 30 && resultIMC <= 34.9){
      resultadoDiv.innerHTML += `<p style="font-size: 0.7em; background-color: #FF0000; padding: 10px">${pessoa.nome}, seu IMC é de   ${resultIMC.toFixed(2)} (Obesidade grau I) </p>`;
    }else if(resultIMC >= 35 && resultIMC <= 39.9){
      resultadoDiv.innerHTML += `<p style="font-size: 0.7em; background-color: #FF0000; padding: 10px">${pessoa.nome}, seu IMC é de   ${resultIMC.toFixed(2)} (Obesidade grau II) </p>`;
    }else if(resultIMC > 40){
      resultadoDiv.innerHTML += `<p style="font-size: 0.7em; background-color: #FF0000; padding: 10px">${pessoa.nome}, seu IMC é de   ${resultIMC.toFixed(2)} (Obesidade grau III) </p>`;
    }  
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
