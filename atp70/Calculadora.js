// Crie um arquivo para criação de uma calculadora. Adicione 4 métodos para realizar as 4 operações básicas da matemática. Realize a chamada dos 4 métodos e imprima seus resultados.

function somar(n1, n2){
    let result = n1 + n2;
    return result;
}

function subtrair(n1, n2){
    let result = n1 - n2;
    return result;
}

function multiplicar(n1, n2){
    let result = n1 * n2;
    return result;
}

function dividir(n1, n2){
    let result = n1 / n2;
    return result;
}

function imprimirResultado(operacao, calculo){
    console.log("O resultado da " + operacao + " é de " + calculo);
}

imprimirResultado("SOMA", somar(10,10));
imprimirResultado("DIVISÃO", dividir(20,4));
imprimirResultado("MULTIPLICAÇÃO", multiplicar(3,3));
imprimirResultado("SUBTRAÇÃO", subtrair(9, 7));