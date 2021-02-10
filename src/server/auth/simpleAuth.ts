import { Request, Response } from 'express';

export const simpleAuth = (req: Request, res: Response, next: () => void) => {
  if (req.headers['authorization'] && req.headers['authorization'] === process.env.TOKEN) {
    next();
    return;
  }

  res.sendStatus(401);
};
