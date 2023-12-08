import { Request, Response, NextFunction } from 'express';

export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token =
    req.headers.authorization;

  if (!token) {
    return res.status(403).json({
      status: 'error'
    });
  }

  token = token.split(' ')[1];
  if (token === process.env.SECRET_AUTH_KEY) {
    next();
  } else {
    return res.status(401).json({
      status: 'error'
    });
  }
};
