import { Express } from 'express';
import { Server, Socket } from 'socket.io';

export interface Properties {
  app?: Express;
  io?: Server;
  socket?: Socket;
}

export type EventSetup = (args: Properties) => void;

export interface DefaultEvent {
  default: EventSetup;
}
