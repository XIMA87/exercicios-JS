/* FUNÇÕES
- Crie uma função que recebe o array alunos e um número que irá representar a média final;
- Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
*/



const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(array, media) {
let aprovados = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i].nota >= media) {
            aprovados.push(array[i].nome);
        } 
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));