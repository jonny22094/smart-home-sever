const socket = io('http://localhost:8080', {
  query: { token: 'token' },
});
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const status = {
  0: 'connected',
  1: 'disconnected',
  2: 'connecting...',
};

socket.on('connect', () => {
  h1.innerHTML = status[0];
});

socket.on('disconnected', () => {
  h1.innerHTML = status[1];
});

socket.on('reconnect', () => {
  h1.innerHTML = status[2];
});

button.addEventListener('click', () => {
  socket.emit('open', {});
});
