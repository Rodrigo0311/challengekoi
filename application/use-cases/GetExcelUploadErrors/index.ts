import { GetExcelUploadErrorsUseCase } from './GetExcelUploadErrorsUseCase';
import { MongoDBExcelErrorUploadRepository } from '../../../infraestructure/database/mongo';

const mongoDBExcelErrorRepository = new MongoDBExcelErrorUploadRepository();
const excelErrorUseCase = new GetExcelUploadErrorsUseCase(mongoDBExcelErrorRepository);

export { excelErrorUseCase };