import { Cliente } from "./Cliente.js";
import { Pessoa } from "./Pessoa.js";

const p1 = new Pessoa();
p1.nome = "Denise";
p1.sobrenome = "Anjos";
p1.cpf = "66.666.666-6";

console.log(p1);

const c1 = new Cliente();
c1.nome = "Cliente 1";
c1.sobrenome = "Sobrenome Cliente";
c1.cpf = "Teste";
c1.codigoCliente = "ABC";

console.log(c1);