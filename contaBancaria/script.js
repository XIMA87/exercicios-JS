/* ORIENTAÇÃO A OBJETOS OOJS
- Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
- Dentro de ContaBancaria, construa o getter e o setter de saldo;
- Dentro de ContaBancaria, crie os métodos sacar e depositar;
- Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
- Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
- Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
- Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
- Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
- Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia; // this se refere ao objeto contaBancaria
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return "Operacao negada !"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupança extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operacao negada !";
        }
    this._saldo = this._saldo - valor;
    }
}