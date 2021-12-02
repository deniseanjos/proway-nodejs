import Cliente from './model/Cliente.js';
import ClienteRepository from './repository/ClienteRepository.js';

const c1 = new Cliente();
const cr = new ClienteRepository();

c1.nomeCliente = "Deniso";
c1.sobrenomeCliente = "Anjos";

console.log(c1.nomeCliente);

cr.create(c1);

console.log(cr.findAll());

const c2 = new Cliente();
c2.nomeCliente = "Joao";
c2.sobrenomeCliente = "Silva"

cr.create(c2);

const c3update = new Cliente();
c3update.id = 2;
c3update.nomeCliente = "Vanessa";

cr.update(c3update);

cr.delete(1);
