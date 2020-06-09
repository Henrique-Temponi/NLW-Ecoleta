import express, { request, response } from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const pointscontroller = new PointsController();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    }); 

    return response.json(serializedItems);
});

routes.post('/points', pointscontroller.create);

export default routes;