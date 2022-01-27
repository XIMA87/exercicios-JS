/* FUNÇÕES
- Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.
- Crie seus próprios objetos para esta atividade!
*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const animal = {
    nome: 'Lili',
    idade: 5,
    raça: 'Lulu da pomerania',
};

console.log(calculaIdade.call(pessoa1, 30)); //método call coloca o objeto ao qual o this se refira
console.log(calculaIdade.apply(pessoa2, [30])); //método apply funciona como o call mas deve usar colchetes
console.log(calculaIdade.call(animal, 7));