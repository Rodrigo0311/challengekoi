import express from 'express';
import { ExcelUploadController } from '../controllers/BulkUpload/BulkUpload.controller'


const excelUploadRouter = express.Router();
const excelUploadController = new ExcelUploadController();

excelUploadRouter.post('/', excelUploadController.handle);

export { excelUploadRouter };