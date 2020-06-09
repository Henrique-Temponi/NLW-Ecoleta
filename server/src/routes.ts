import express, { request, response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsControllers from './controllers/ItemsControllers';

const routes = express.Router();
const pointscontroller = new PointsController();
const itemsControllers = new ItemsControllers();

routes.get('/items', itemsControllers.index);
routes.post('/points', pointscontroller.create);
routes.get('/points/:id', pointscontroller.show);
routes.get('/points/', pointscontroller.index);

export default routes;