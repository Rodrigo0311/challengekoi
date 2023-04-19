import express from 'express';
import { GetExcelUploadController } from '../controllers'


const getExcelUploadRouter = express.Router();
const getExcelUploadController = new GetExcelUploadController();

getExcelUploadRouter.get('/:id', getExcelUploadController.handle);

export { getExcelUploadRouter };