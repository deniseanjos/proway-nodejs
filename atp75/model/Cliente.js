class Cliente {
    id;
    nomeCliente;
    sobrenomeCliente;

    constructor(nomeCliente, sobrenomeCliente, id=null){
        this.id = id;
        this.nomeCliente = nomeCliente;
        this.sobrenomeCliente = sobrenomeCliente;
    }
}

export default Cliente;