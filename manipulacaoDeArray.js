/*MANIPULAÇÃO DE ARRAY COM MAP, FILTER E REDUCE

MAP
- Faça a multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
FILTER
- Filtre e retorne todos os números pares de um array.
REDUCE
- Some todos os números de um array
- Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/


//MAP

const maca = {
    value = 2,
};
const laranja = {
    value = 3,
};

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1,2];

console.log('this => maçã', mapComThis(nums, maca));

console.log('this => laranja', mapComThis(nums, laranja));

//--------------------------------------------------------------------

function mapSemThis(array) { //modo mais comum de se usar o map
    return array.map(function(item) {
        return item * 2;
    });
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums2));

//------------------------FILTER-------------------------------

function filtraPares(array) {
    return array.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const nums3 = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(nums3));

//---------------------------REDUCE---------------------------------

function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        return prev + current;
    })
}

const nums4 = [1, 2];

console.log(somaNumeros(nums4));

//--------------------------------------------------------------

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('Produto ', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log('Saldo Final:', calculaSaldo(saldoDisponivel, lista));