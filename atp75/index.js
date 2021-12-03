import bodyParser from 'body-parser';
import Express from 'express';
import ClienteApi from './api/ClienteApi.js';

const api = Express();
api.use(bodyParser.json());
api.listen(3000, ()=> console.log('Working...'));
api.use('/api/cliente', ClienteApi);
