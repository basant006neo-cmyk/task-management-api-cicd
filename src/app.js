import express from 'express';
// import routes from './routes/index.js';
// import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok',  message : "v3 stage" });
});

// app.use('/api', routes);
// app.use(errorMiddleware);

export default app;
