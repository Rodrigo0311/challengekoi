import { Request, Response, NextFunction } from 'express';

export const ErrorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const stack = err.stack || '';

  console.error(`[ERROR] ${statusCode} - ${message} - ${stack}`);

  res.status(statusCode).json({ message });
};