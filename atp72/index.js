import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";

const pf = new PessoaFisica("000.000.000-00");
pf.nome = "Pessoa Fisica PF";

console.log(pf.nome, pf.cpf);

const pj = new PessoaJuridica();
pj.cnpj = "99.999.999/9999-00";
pj.nome = "Pessoa Juridica PJ";

console.log(pj.nome, pj.cnpj);