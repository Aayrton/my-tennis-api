import express, { Request, Response, NextFunction } from 'express';

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
  });
}

export { errorHandler };
