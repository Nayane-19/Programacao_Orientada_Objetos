
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import {Gerente} from "./Funcionários/Gerente.js";
import {Diretor} from "./Funcionários/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

//Atribuindo valores aos clientes

const cliente1 = new Cliente("Ricardo", 11122233309, "456");


const cliente2 = new Cliente("Alice", 88822233309, "789");


//Atribuindo valores as contas

const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1001);

const ContaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);



//Operações

contaCorrenteCliente1.depositar(500);
contaCorrenteCliente1.sacar(200);
contaCorrenteCliente1.transferir(200, contaCorrenteCliente2);



console.log(contaCorrenteCliente1);
console.log(ContaPoupancaCliente1);
console.log("O total de contas criadas no banco é " + ContaCorrente.numeroDeContas)

//-----------------------------------------------------------------------------------------------------------------------

//Atribuindo valores aos funcionários gerente e diretor

const diretor = new Diretor ("Rodrigo", 10000, 12345678900);
diretor.codastrarSenha ("123456")
const gerente = new Gerente ("Marta", 5000, 78945612300);
gerente.codastrarSenha ("1234");

const diretorLogado = SistemaAutenticacao.login (diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login (gerente, "1234");

console.log("Login feito com sucesso? " + diretorLogado);
console.log("Login feito com sucesso? " + gerenteLogado);



