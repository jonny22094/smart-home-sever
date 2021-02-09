import { Request, Response } from 'express';

export const simpleAuth = (req: Request, res: Response, next: Function) => {
  if (req.headers['authorization'] && req.headers['authorization'] === 'token') {
    next();
  }

  res.sendStatus(401);
}