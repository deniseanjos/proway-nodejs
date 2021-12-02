import { Pessoa } from "./Pessoa.js";

export class PessoaFisica extends Pessoa{
    constructor(cpf){
        super();
        this.cpf = cpf;
    }
}