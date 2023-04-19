import { MongoDBExcelUploadRepository } from "../../../infraestructure/database/mongo/MongoDBExcelUploadRepository";
import { MongoDBExcelErrorUploadRepository } from "../../../infraestructure/database/mongo/MongoDBExcelErrorUploadRepository";
import { ExcelUploadUseCase } from "./CreateExcelUploadUseCase";
// Inicializar el repositorio para la carga de Excel
const excelUploadRepository: MongoDBExcelUploadRepository = new MongoDBExcelUploadRepository();
const excelErrorUploadRepository: MongoDBExcelErrorUploadRepository = new MongoDBExcelErrorUploadRepository();


// Inicializar caso de uso para la carga de Excel
const createExcelUploadUseCase = new ExcelUploadUseCase(excelUploadRepository,excelErrorUploadRepository);

// Exportar el caso de uso para ser utilizado desde el controlador
export { createExcelUploadUseCase };