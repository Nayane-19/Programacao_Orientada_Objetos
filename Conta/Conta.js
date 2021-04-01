// Class abstrata - só funciona para ser herdada
export class Conta {

    constructor (saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if (this.contructor == Conta) {
            throw new Error ("Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata")
        }

    }

    set cliente (novoValor) {
        if (novoValor instanceof Cliente)
        this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }
    

    get saldo(){
        return this.saldo
    }

    //verificar operações

    //Metodo abstrado - não foi feito para ser usado diretamente
    sacar(valor){
        throw new Error ("O metodo sacar da conta é abstrato!");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if (valorSacado > this._saldo) {
            console.log("Não foi possível efetuar o saque. Saldo insuficiente");          
            
        }
        else {
            this._saldo -= valorSacado;
            console.log(this.cliente)
            console.log("O valor sacado foi " + valorSacado)
            console.log("Seu saldo é " + this._saldo) 
            return valorSacado;
        }
    }
    
    depositar(valor){
        if (valor >0) {
            this._saldo += valor;
            console.log(this.cliente)
            console.log("O valor depositado foi " + valor)
            console.log("Seu saldo é " + this._saldo)
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
