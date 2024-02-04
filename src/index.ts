import express, { Request, Response } from 'express';
import players from './routes/players';
import { notFound, errorHandler } from './middlewares';

import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use('/api/players', players);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
