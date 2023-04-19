import { Request, Response, Next } from 'express';
import { createExcelUploadUseCase } from '../../../../application/use-cases';
import { CreateExcelUploadInput } from '../../../../application/use-cases/CreateExcelUpload/CreateExcelUploadInput';

export class ExcelUploadController {

  async handle(req: Request, res: Response,next: Next): Promise<any> {
    const file = req.file;
    const { mapping, callbackUrl } = req.body;

    // Validar que se haya enviado un archivo Excel
    if (!file) {
      res.status(400).json({ message: 'No se ha enviado un archivo Excel' });
      return;
    }

    // Validar que se haya enviado un mapping
    if (!mapping || !callbackUrl) {
      res.status(400).json({ message: 'No se ha enviado un mapping/callbackUrl para el archivo' });
      return;
    }
    try {
      const input: CreateExcelUploadInput = {
        file: file,
        mapping: mapping,
        callbackUrl: callbackUrl,
      };
  
      // Ejecutar la carga del archivo
      const {id, parsedData} = await createExcelUploadUseCase.execute(input);
      // Responder con el ID de la carga del archivo
      res.status(200).json({ id,parsedData });
    } catch (error) {
      next(error)
    }
   
  }
}