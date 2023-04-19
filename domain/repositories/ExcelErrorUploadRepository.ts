import { ExcelError } from "../entities";
import { ErrorFilter } from "../../application/use-cases/GetExcelUploadErrors/GetExcelUploadErrorsInput";
import { PagedResult } from "../../application/use-cases/GetExcelUploadErrors/GetExcelUploadErrorsInput";
export interface ExcelErrorUploadRepository {
  createMany(excelErros: any,uploadId: string): Promise<void>;
  getErrorsByRowAndColumn(
  filter : ErrorFilter,
  page:number,
  limit:number
): Promise<PagedResult<ExcelError>>;
}