import { ExcelUpload } from "../../../domain/entities/ExcelUpload";
import { ExcelUploadRepository } from "../../../domain/repositories/ExcelUploadRepository";
import { parseExcelFile } from "../../../infraestructure/utils/ParseExcelFile"
import path from 'path';
import axios from 'axios';
import { ErrorHandlerMiddleware } from "../../../infraestructure/web/middleware/ErrorHandler.middleware";
import { ExcelErrorUploadRepository } from "../../../domain";
import { ErrorFilter } from "./GetExcelUploadErrorsInput";

export class GetExcelUploadErrorsUseCase {
  constructor(private excelErrorUploadRepository:ExcelErrorUploadRepository ) {}

  async execute(filter: ErrorFilter,page:number,limit:number): Promise<any> {
    try {
        return await this.excelErrorUploadRepository.getErrorsByRowAndColumn(filter,page,limit)
    } catch (error) {
        throw new Error(error)
    }
  }
}