import { ExcelErrorUploadRepository} from '../../../domain';
import {EcxelErrorModel} from './ExcelErrorModel'
import { ExcelError } from '../../../domain/entities';
import { ErrorFilter,PagedResult } from '../../../application/use-cases/GetExcelUploadErrors/GetExcelUploadErrorsInput';

export class MongoDBExcelErrorUploadRepository implements ExcelErrorUploadRepository {

  async createMany(errors: any, uploadId: string): Promise<any> {
    try {
        const errorDocuments = errors.map(error => ({
          row: error.row,
          column: error.col,
          message: error.message,
          uploadId: uploadId
        }));
        await EcxelErrorModel.insertMany(errorDocuments);
      } catch (error) {
        throw new Error('Error in createMany method');
      }
  }

  async getErrorsByRowAndColumn(filter: ErrorFilter, page: number, limit: number): Promise<PagedResult<ExcelError>> {
    try {
        const query: any = {};

        if (filter.row !== undefined) {
        query.row = filter.row;
        }

        if (filter.column !== undefined) {
        query.column = filter.column;
        }

        const total = await EcxelErrorModel.countDocuments(query);
        const totalPages = Math.ceil(total / limit);
        const currentPage = Math.min(Math.max(page, 1), totalPages);
        const skip = (currentPage - 1) * limit;
        const data = await EcxelErrorModel
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip >=0 ? skip: 0)
        .limit(limit?limit :10)

        return { total, page: currentPage, limit, data };
    } catch (error) {
        throw new Error('Error in paginated method');
    }
    
  }
  
}