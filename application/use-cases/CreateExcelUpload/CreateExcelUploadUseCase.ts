import path from 'path';
import axios from 'axios';
import { ExcelUpload } from "../../../domain/entities/ExcelUpload";
import { ExcelUploadRepository } from "../../../domain/repositories/ExcelUploadRepository";
import { parseExcelFile } from "../../../infraestructure/utils/ParseExcelFile"
import { CreateExcelUploadInput } from "./CreateExcelUploadInput";
import { ExcelErrorUploadRepository } from "../../../domain";

export class ExcelUploadUseCase {
  constructor(private readonly excelUploadRepository: ExcelUploadRepository,private excelErrorUploadRepository:ExcelErrorUploadRepository ) {}

  async execute(input: CreateExcelUploadInput): Promise<CreateExcelUploadOutput> {
    try {
      const { file, mapping, callbackUrl } = input;
      // Validar el formato del archivo excel
      const fileExtension = path.extname(file.originalname);
      if (fileExtension !== ".xlsx" && fileExtension !== ".xls") {
        throw new Error("This file is not valid");
        
      }
      // Crear objeto ExcelUpload y guardarlo en la base de datos
      const excelUpload = new ExcelUpload(file.originalname, mapping, 'pending', 0, callbackUrl);
      const { id } = await this.excelUploadRepository.create(excelUpload);

      // Procesar el archivo excel y actualizar el estado de la carga en la base de datos
      const parsedData = await parseExcelFile(file.buffer, JSON.parse(mapping));
      await this.excelUploadRepository.update(id, {status:'processing'})
      // Realizar la callback y actualizar el estado de la carga en la base de datos
      await axios.post(callbackUrl, { id: id, status:'done' });
      await this.excelErrorUploadRepository.createMany(parsedData.errors,id)
      await this.excelUploadRepository.update(id,{status:'done',errorCount:parsedData.errors.length})
    
      return { id, parsedData };
    } catch (error) {
      throw new Error(error);
      
    }
    
     
  }
}