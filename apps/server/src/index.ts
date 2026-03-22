import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from '@ltrpc/router/router';
//import superjson from 'superjson';
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/trpc', createExpressMiddleware({
  router: appRouter,
}));

app.listen(3000);