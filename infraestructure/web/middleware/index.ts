import { Request, Response, NextFunction } from 'express';
import { ErrorHandlerMiddleware } from './ErrorHandler.middleware';

export {
  ErrorHandlerMiddleware,
  checkAuthorization,
};

function checkAuthorization(req: Request, res: Response, next: NextFunction): void {
  // Implement your logic for authorization check here
  // For example:
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header not found' });
  }

  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid authorization header' });
  }

  // Add user to request object for later use in other middleware or controllers
  req.user = {
    id: 'user-id', // Replace with actual user id
  }
}