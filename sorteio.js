// SORTEIO DE 6 NÚMEROS ENTRE UM TOTAL DE 60.

let sorteio;
let numeros = new Array();

let i = 0;

while (i < 6) {
    sorteio = Math.ceil(Math.random()*60);
    if (numeros.indexOf(sorteio) < 0) { //se indexOf retornar -1, ocorrerá o push, a acumulação e a iteração.
        numeros.push(sorteio);
        i++
    }
}

function ordenarNumeros(a,b) {
    return a-b; //solução para ordenar os numeros em ordem crescente
}

numeros.sort(ordenarNumeros);
console.log(numeros);
