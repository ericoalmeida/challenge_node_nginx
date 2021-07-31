import { Router } from 'express';

import { PeopleController } from '@src/controllers/people-controller';

const routes = Router();

const peopeController = new PeopleController()

routes.get('/', peopeController.handle);

export { routes }

