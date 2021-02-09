import express, { Express } from 'express';

export default class Server {
  app: Express;
  port = 80;
  token = 'token';

  constructor() {
    this.setup();
  }

  config() {
    console.log(__dirname);
    this.app.use(express.static(`${__dirname}/../../client`));
  }

  setup() {
    this.app = express();

    this.config();

    this.app.listen(this.port, () => {
      console.log(`Server started on ${this.port} port`)
    });
  }
}