/* VARIAVEIS E TIPOS
-Verifique se uma string é um palíndromo.
-Obtenha duas soluções para o problema.
*/

function verificaPalindromo(string) {
    if(!string) return; //validação

    return string.split("").reverse().join("") === string;
    //split se você passar um string vazia ele separa todas as letras
    //join junta todos os elementos do array e formará uma string
}

console.log("Solução 1")
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("gato"));

// OUTRA SOLUÇÃO

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 -i]) {
        //indice começa no 0 mas a length começa no 1, logo a palavra ovo por exemplo terá os indices 0, 1 e 2 mas length 1, 2 e 3.
        return false;
        }
    }
    return true;
}

console.log("Solução 2")
console.log(verificaPalindromo2("ovo"));
console.log(verificaPalindromo2("sapo"));