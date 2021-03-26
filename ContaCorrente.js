import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static numeroDeContas = 0;
    agencia;
    _cliente;


    #saldo = 0; //Atributo privado

    //para declarar um atributo como privado apenas para os desenvolvedores utiliza-se _ antes do atributo

    set cliente (novoValor) {
        if (novoValor instanceof Cliente)
        this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }
    

    get saldo(){
        return this.#saldo
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    //verificar operações

    sacar(valor){
        if (valor > this.#saldo) {
            console.log("Não foi possível efetuar o saque. Saldo insuficiente");          
            
        }
        else {
            this.#saldo -= valor;
            console.log(this.cliente)
            console.log("O valor sacado foi " + valor)
            console.log("Seu saldo é " + this.#saldo) 
            return valor;
        }
    }
    
    depositar(valor){
        if (valor >0) {
            this.#saldo += valor;
            console.log(this.cliente)
            console.log("O valor depositado foi " + valor)
            console.log("Seu saldo é " + this.#saldo)
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}