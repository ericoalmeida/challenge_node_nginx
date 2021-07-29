import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send('<h1>Full Cycle Rocks!</h1>');
});

export { routes }

