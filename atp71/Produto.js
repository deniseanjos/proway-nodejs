export class Produto {
    nomeProduto;
    categoriaProduto;

    constructor(nomeProduto, categoriaProduto){
        this.categoriaProduto = categoriaProduto;
        this.nomeProduto = nomeProduto;
    }

    get nomeProduto(){
        return this.nomeProduto;
    }

    set nomeProduto(prod){
        this.nomeProduto = prod;
    }

    get categoriaProduto(){
        return this.categoriaProduto;
    }

    set categoriaProduto(cat){
        this.categoriaProduto = cat;
    }
}