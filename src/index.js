/* eslint-disable arrow-parens */

import Server from './config/server';
import './config/env';
import routes from './router';
import databaseConnection from './config/mongoConnection';

const main = async () => {
  databaseConnection();
  const server = new Server(routes);
  server.listen(process.env.PORT);
};

main();
