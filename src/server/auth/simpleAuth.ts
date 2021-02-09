import { Request, Response } from 'express';

export const simpleAuth = (req: Request, res: Response, next: Function) => {
  if (req.headers['authorization'] && req.headers['authorization'] === process.env.TOKEN) {
    next();
  }

  res.sendStatus(401);
};
