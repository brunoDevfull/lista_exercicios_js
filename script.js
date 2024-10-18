function limparCampos(){
    document.getElementById('#valor1').value = ""
    document.getElementById('#valor2').value = ""
}


function somar() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    var resultado = numero1 + numero2;
    document.getElementById('resultado').textContent = `A Soma é: ${resultado}`;
    
    limparCampos()
}

function calculadora(){

    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    var adicao = valor1 + valor2;
    document.getElementById('somar').textContent = `A Soma é: ${adicao}`;

    var subtracao = valor1 - valor2;
    document.getElementById('subtrair').textContent = `A Subtração é: ${subtracao}`;

    var multiplicacao = valor1 * valor2;
    document.getElementById('multiplicar').textContent = `A Multiplicação é: ${multiplicacao}`;

    var divisao = valor1 / valor2;
    document.getElementById('dividir').textContent = `A Divisão é: ${divisao}`;

    limparCampos()

}

function cosumoMedio(){
    var distancia = document.getElementById("distancia").value;
    var combustivelGasto = document.getElementById("combustivel_gasto").value;

    distancia = parseInt(distancia);
    combustivelGasto = parseInt(combustivelGasto);

    var consumoMedio = distancia / combustivelGasto;
    document.getElementById('dividir').textContent = `O Consumo medio é: ${cosumoMedio}`;
}
    

// 4. Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de
// vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15%
// de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário
// no final do mês.

