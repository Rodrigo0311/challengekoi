import { UpdateExcelUploadInput } from '../../application/use-cases/CreateExcelUpload/CreateExcelUploadInput';
import { ExcelUpload } from '../../domain/entities/ExcelUpload';

export interface ExcelUploadRepository {
  create(excelUpload: ExcelUpload): Promise<ExcelUpload>;
  update(id: string ,excelUpload: UpdateExcelUploadInput): Promise<void>;
  getById(id: string): Promise<ExcelUpload>;

}