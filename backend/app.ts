import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/v1/health', (req: Request, res: Response) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
