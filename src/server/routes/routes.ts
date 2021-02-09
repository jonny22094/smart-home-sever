import { Properties } from '../../types';
import { simpleAuth } from '../auth/simpleAuth';
import { color } from '../../sockets/events/color';
import { open } from '../../sockets/events/open';

export const routes = ({ app, io }: Properties) => {
  app.post('/open', simpleAuth, (_, res) => {
    console.log('open by POST request');
    open(io);
    res.sendStatus(200);
  });

  app.get('/on', simpleAuth, (_, res) => {
    console.log('Lights on');
    color(io, '#ffffff');
    res.sendStatus(200);
  });

  app.get('/off', simpleAuth, (_, res) => {
    color(io, '#000000');
    res.sendStatus(200);
  });

  app.get('/color/:color', simpleAuth, (req, res) => {
    color(io, `#${req.params.color}`);
    res.sendStatus(200);
  });
};
