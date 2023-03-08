import AuthRouter from './modules/routers/auth/auth';

export default function routes(app) {
  app.use('/api/auth', AuthRouter);
}
