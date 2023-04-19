import { Request, Response, Next} from "express";
import { excelErrorUseCase } from "../../../../application/use-cases"
import { ErrorFilter } from "../../../../application/use-cases/GetExcelUploadErrors/GetExcelUploadErrorsInput";
import { validatePage, validateLimit, validateRow } from './GetErrorsExcelValidator';

export class GetErrorsExcelController {

  async handle(request: Request, response: Response,next: Next) {

    const {page,limit,row,column,uploadId} = request.query

    try {
      const validatedPage = validatePage(Number(page));
      const validatedLimit = validateLimit(Number(limit));
      let validatedRow;
      if (row) {
        validatedRow = validateRow(Number(row));
      }
      
      const errorFilterRequest: ErrorFilter = {
          column,
          row: validatedRow,
          uploadId
        };
        const data = await excelErrorUseCase.execute(errorFilterRequest,validatedPage,validatedLimit)

      return response.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
}