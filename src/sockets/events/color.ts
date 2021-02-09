import { Properties } from '../../types';
import { hexToRgb } from '../../utils/hextToRgb';

type ColorSequence = { time: number; color: string }[];

const timer = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
let newSequence = true;
let promise: Promise<void> = null;

const ticker = async (io: SocketIO.Server, sequence: ColorSequence) => {
  let index = 0;
  newSequence = false;

  while (!newSequence && sequence.length) {
    io.emit('color', hexToRgb(sequence[index].color));
    await timer(sequence[index].time);

    index = sequence.length === index + 1 ? 0 : index + 1;
  }

  return;
};

export const color = async (io: SocketIO.Server, colorInHex: ColorSequence | string) => {
  newSequence = true;

  if (promise) {
    await promise;
  }

  if (typeof colorInHex !== 'string') {
    promise = ticker(io, colorInHex);
  } else {
    io.emit('color', hexToRgb(colorInHex));
  }
};

export default ({ io, socket }: Properties) => {
  socket.on('color', ({ color: colorInHex }: { color: string }) => color(io, colorInHex));
};
