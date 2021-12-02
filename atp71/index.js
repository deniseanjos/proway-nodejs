import { Categoria } from "./Categoria.js";
import { Produto } from "./Produto.js";

const c1 = new Categoria();

c1.nomeCategoria = "Eletrodomesticos";

console.log(c1);

const p1 = new Produto("Geladeira", c1);

console.log(p1);