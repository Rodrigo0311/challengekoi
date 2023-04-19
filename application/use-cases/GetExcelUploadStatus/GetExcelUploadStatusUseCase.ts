
import { ExcelUpload, ExcelUploadRepository } from "../../../domain";
export class GetExcelUploadStatusUseCase {
  constructor(private readonly excelUploadRepository: ExcelUploadRepository) {}

  async execute(id: string): Promise<ExcelUpload> {
    try {
        
        const excelUpload = await this.excelUploadRepository.getById(id);

        return excelUpload

    } catch (error) {
        throw new Error(error)
    }
  }
}
