import { Server } from 'socket.io';
import { Properties } from '../../types';
import { hexToRgb } from '../../utils/hextToRgb';

export const color = async (io: Server, colorInHex: string) => {
  console.log('emit - color');

  io.emit('color', hexToRgb(colorInHex));
};

export default ({ io, socket }: Properties) => {
  socket.on('color', ({ color: colorInHex }: { color: string }) => color(io, colorInHex));
};
