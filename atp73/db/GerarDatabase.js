import ClienteTable  from "./ClienteTable.js";
import Database from "./Database.js";


Database
    .sync()
    .then( () => console.log('Sincronizando o Database...'))
    .catch( () => console.log('Ops, deu erro.'));