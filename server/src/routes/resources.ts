import { Router } from 'express';
import {
	getResourcesByTitle,
	getTotalResources,
	getTotalResourcesByTitle
} from '../controllers/resources';

const resourceRouter = Router();

resourceRouter.get('/', getResourcesByTitle);
resourceRouter.get('/total', getTotalResources);
resourceRouter.get('/total/title', getTotalResourcesByTitle);

export default resourceRouter;
