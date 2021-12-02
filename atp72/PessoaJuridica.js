import { Pessoa } from "./Pessoa.js";

export class PessoaJuridica extends Pessoa{
    constructor(cnpj){
        super();
        this.cnpj = cnpj;
    }
}