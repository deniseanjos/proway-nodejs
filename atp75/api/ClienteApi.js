import { response, Router } from 'express';
import Cliente from '../model/Cliente.js';
import ClienteRepository from './../repository/ClienteRepository.js';

const ClienteApi = Router();

const repository = new ClienteRepository();

ClienteApi.get('/', async (req, resp) =>{
    const list = await repository.findAll();
    resp.send(list);
});

ClienteApi.post('/', async (req, resp) => {
    let {nomeCliente, sobrenomeCliente} = req.body;
    const cliente = new Cliente(nomeCliente, sobrenomeCliente);
    const retorno = await repository.create(cliente);
    resp.send(retorno);
});

ClienteApi.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let {nomeCliente, sobrenomeCliente} = req.body;
    const cliente = new Cliente(nomeCliente, sobrenomeCliente, id);
    const retorno = await repository.update(cliente);
    resp.send(retorno);
});

ClienteApi.delete('/:id', async (req, resp) => {
    let id = req.params.id;
    const retorno = await repository.delete(id);
    resp.send(JSON.stringify(retorno));
});

export default ClienteApi;