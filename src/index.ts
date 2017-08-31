import * as Promise from 'bluebird'
import * as config from 'config'
import database, {
  DatabaseProvider
} from './database'
import api from './api'
import startApp from './server'

const provider = config.get('databaseProvider')

const databaseConfiguration = {
  provider
}

module.exports = Promise
  .resolve(databaseConfiguration)
  .then(database)
  .then(api)
  .then(startApp)
  .catch((error) => {
    console.log('erro', error)
  })
