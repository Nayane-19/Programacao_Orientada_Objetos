
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

//Atribuindo valores aos clientes

const cliente1 = new Cliente("Ricardo", 11122233309);


const cliente2 = new Cliente("Alice", 88822233309);


//Criando conta

const contaCorrenteCliente1 = new ContaCorrente(1001,cliente1);
const contaCorrenteCliente2 = new ContaCorrente(1001, cliente2);



//Operações

contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(200);
contaCorrenteCliente1.transferir(200, contaCorrenteCliente2);




console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);
console.log("O total de contas criadas no banco é " + ContaCorrente.numeroDeContas)




