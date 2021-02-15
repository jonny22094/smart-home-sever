import { Properties } from '../../types';
import { hexToRgb } from '../../utils/hextToRgb';

export const color = async (io: SocketIO.Server, colorInHex: string) => {
  io.emit('color', hexToRgb(colorInHex));
};

export default ({ io, socket }: Properties) => {
  socket.on('color', ({ color: colorInHex }: { color: string }) => color(io, colorInHex));
};
