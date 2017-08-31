import { Database } from '../database';
import { Router } from 'express';

const { version } = require('../../package.json');


export default (database: Database) => {
    console.info('Init Api module');
    const api = Router();

    api.get("/", (req, res) => {
        res.json({ version });
    })


    return api;
}