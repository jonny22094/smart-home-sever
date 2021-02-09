import {Express} from 'express';
import IO from 'socket.io';

export interface Properties {
  app?: Express;
  io?: IO.Server;
  socket?: IO.Socket;
}

export type EventSetup = (args: Properties) => void

export interface DefaultEvent {
  default: EventSetup
}