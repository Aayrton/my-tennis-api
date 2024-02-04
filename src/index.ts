import express, { Request, Response } from 'express';
import cors from 'cors';
import playersRouter from './routes/players';
import { errorHandler } from './middlewares';

import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.status(201).json({ message: 'Welcome to EuroTennis Api' });
});

app.use('/api/players', playersRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
