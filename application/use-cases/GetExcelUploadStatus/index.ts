import { GetExcelUploadStatusUseCase } from './GetExcelUploadStatusUseCase';
import { MongoDBExcelUploadRepository } from '../../../infraestructure/database/mongo';

const mongoDBExcelUploadRepository = new MongoDBExcelUploadRepository();
const excelUploadUseCase = new GetExcelUploadStatusUseCase(mongoDBExcelUploadRepository);

export { excelUploadUseCase };