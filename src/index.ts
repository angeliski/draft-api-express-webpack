import * as Promise from 'bluebird';
import database, { DatabaseProvider } from './database';
import api from './api';
import startApp from './server';


module.exports = Promise
  .resolve({
    provider: DatabaseProvider.MYSQL
  })
  .then(database)
  .then(api)
  .then(startApp)

  .catch((error) => {
    console.log('erro', error);
  });