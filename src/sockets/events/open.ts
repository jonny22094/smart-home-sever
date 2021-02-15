import { Server } from 'socket.io';
import { Properties } from '../../types';
const debounceDelay = 5000;
let isOpen = false;

export const open = (io: Server) => {
  if (!isOpen) {
    isOpen = true;
    console.log('emit - open');

    io.emit('open', {});

    setInterval(() => {
      isOpen = false;
    }, debounceDelay);
  }
};

export default ({ io, socket }: Properties) => {
  socket.on('open', () => open(io));
};
