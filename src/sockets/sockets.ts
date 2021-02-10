import { Server, Socket } from 'socket.io';
import requireDir from 'require-dir';
const events: DefaultEvent[] = Object.values(requireDir('./events'));
import { DefaultEvent } from '../types';

export default class Sockets {
  io: Server;
  port = 8080;
  users: { [key: string]: Socket } = {};

  constructor() {
    this.setup();
  }

  config() {
    this.io.use((socket, next) => {
      if (socket.handshake.query && socket.handshake.query.token === process.env.TOKEN) {
        next();
        return;
      }

      console.log('socket - authentication error');
    });
  }

  setup() {
    this.io = new Server(this.port, {
      cors: {
        origin: '*',
      },
    });

    console.log(`Sockets started on ${this.port} port`);

    this.config();
    this.events();
  }

  events() {
    this.io.on('connection', (socket: Socket) => {
      console.log(`socket - ${socket.id} connected`);

      socket.once('disconnect', () => {
        console.log(`socket - ${socket.id} disconnected`);
        delete this.users[socket.id];
      });

      events.map(({ default: event }) => event({ io: this.io, socket }));
    });
  }
}
