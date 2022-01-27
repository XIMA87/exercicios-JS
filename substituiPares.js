/* VARIAVEIS E TIPOS
-Troque todos os elementos pares e diferentes 
de zero de um array pelo número 0.
-Se o array for vazio, retorne -1.
*/

function substituiPares(array) {
    if(!array) return -1; //validação
    if(!array.length) return -1; //validação
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Já é zero!");
        } else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0
        }
    }

    return array;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(substituiPares(array))
console.log(substituiPares([]))