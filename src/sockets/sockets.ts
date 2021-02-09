import IO from 'socket.io';
import requireDir from 'require-dir';
const events: DefaultEvent[] = Object.values(requireDir('./events'));
import { DefaultEvent } from '../types'

export default class Sockets {
  io: IO.Server;
  port = 8080;
  users: { [key: string]: IO.Socket} = {};

  constructor() {
    this.setup();
  }

  config() {
    this.io.use((socket, next) => {
      if (socket.handshake.query && socket.handshake.query.token === process.env.TOKEN) {
        next();
      }

      console.log(('socket - authentication error'));
    })
  }

  setup() {
    this.io = IO(this.port);

    console.log(`Sockets started on ${this.port} port`)

    this.config();
    this.events();
  }

  events() {
    this.io.on('connection', socket => {
      console.log(`socket - ${socket.id} connected`);

      
      socket.once('disconnect', () => {
        delete this.users[socket.id];
      })

      events.map(({default: event}) => event({io: this.io, socket}));
    });
  }
}