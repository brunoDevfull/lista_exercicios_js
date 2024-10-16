// 1. Faça um algoritmo que receba dois números e exiba o resultado da sua soma.
function somar() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    var resultado = numero1 + numero2;
    document.getElementById('resultado').textContent = `A Soma é: ${resultado}`;
    
}


// 2. Faça um algoritmo que receba dois números e ao final mostre a soma, subtração,
// multiplicação e a divisão dos números lidos.
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

// console.log(`A Soma de ${valor1} + ${valor2} é: ${adicao}`);
// console.log(`A Subtração de ${valor1} - ${valor2} é: ${subtracao}`);
// console.log(`A Multiplicção de ${valor1} * ${valor2} é: ${multiplicacao}`);
// console.log(`A Divisão de ${valor1} / ${valor2} é: ${divisao}`);
}
// 3. Escrever um algoritmo para determinar o consumo médio de um automóvel sendo
// fornecida a distância total percorrida pelo automóvel e o total de combustível gasto.
var distancia = 100;
var combustivelGasto = 50;
var consumoMedio = distancia / combustivelGasto;
console.log(`O consumo médio do Veiculo é: ${consumoMedio} litros por km`);

// 4. Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de
// vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15%
// de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário
// no final do mês.

