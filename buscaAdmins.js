/* COLEÇÃO CHAVEADA MAPA
-Crie uma função que recebe um map.
-Crie um map e popule-o com usuarios e papeis no sistema.
-Utilize for...of para retornar os administradores.
*/

function buscaAdmin(map) {
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

    usuarios.set('João', 'Admin');
    usuarios.set('Ana', 'Admin');
    usuarios.set('Marcia', 'User');
    usuarios.set('Camila', 'User');
    usuarios.set('Rafael', 'Admin');
    usuarios.set('Lucas', 'Admin');

console.log(buscaAdmin(usuarios));