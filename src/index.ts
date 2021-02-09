import Server from './server';
import Sockets from './sockets';
import { routes } from './server/routes';

const run = () => {
  const server = new Server();
  const sockets = new Sockets();

  routes({
    app: server.app,
    io: sockets.io,
  });
};

run();
