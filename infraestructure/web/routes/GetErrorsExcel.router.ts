import express from 'express';
import { GetErrorsExcelController } from '../controllers'


const getErrorsRouter = express.Router();
const getErrorsController = new GetErrorsExcelController();

getErrorsRouter.get('/', getErrorsController.handle);

export { getErrorsRouter };