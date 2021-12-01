// Crie um arquivo adicione uma variável inteira com qualquer valor. Calcule o fatorial deste valor utilizando o for e imprima o resultado no terminal.

let valor = 9;
let resultado = 1;

for(let i = 1; i <= valor; i++){
    resultado *= i;
}

console.log("O fatorial do número " + valor + " é igual a: " + resultado);
