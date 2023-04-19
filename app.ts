import express from 'express';
import dotenv from 'dotenv';
import multer from "multer";
import path from 'path';
import { json } from 'body-parser';
import { excelUploadRouter } from './infraestructure/web/routes/ExcelUpload.router';
import { getErrorsRouter } from './infraestructure/web/routes/GetErrorsExcel.router';
import { getExcelUploadRouter } from './infraestructure/web/routes/GetExcelUpload.router';
import { ErrorHandlerMiddleware } from './infraestructure/web/middleware/ErrorHandler.middleware';

// Crear un almacenamiento en memoria para el archivo
const storage = multer.memoryStorage();

// Configurar el middleware de multer con el almacenamiento
const upload = multer({
  storage,
  // Validar que el archivo tenga una extensión .xlsx
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== ".xlsx") {
      return callback(new Error("Solo se permiten archivos Excel"));
    }
    callback(null, true);
  },
  // Limitar el tamaño del archivo a 10 MB
  limits: { fileSize: 10 * 1024 * 1024 },
});

const app = express();

// Middleware para parsear el body de las requests
app.use(json());

// Rutas de la aplicación

dotenv.config();
app.use('/excel', upload.single("file"), excelUploadRouter);
app.use('/errors',  getErrorsRouter);
app.use('/get-excel',  getExcelUploadRouter);
app.use(ErrorHandlerMiddleware);



export { app };