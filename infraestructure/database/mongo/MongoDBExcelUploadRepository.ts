import { ExcelUpload } from '../../../domain/entities';
import { ExcelUploadRepository} from '../../../domain';
import {EcxelModel} from './ExcelModel'
import { UpdateExcelUploadInput } from '../../../application/use-cases/CreateExcelUpload/CreateExcelUploadInput';

export class MongoDBExcelUploadRepository implements ExcelUploadRepository {

  async create(upload: ExcelUpload): Promise<any> {
    try {
      const { _id } = await EcxelModel.create(upload);
      return {id: _id}
    } catch (error) {
      throw new Error(error);
      
    }
  }
  async update(id,upload: UpdateExcelUploadInput): Promise<any> {
    try {
      const { _id } = await EcxelModel.findByIdAndUpdate(id,upload, { new: true, omitUndefined: true });
      return {id: _id}
    } catch (error) {
      throw new Error(error);
      
    }
    
  }
  async getById(id: string): Promise<ExcelUpload> {
    try {
      const document = await EcxelModel.findOne({_id: id});
      return document
    } catch (error) {
      throw new Error(error);
      
    }
    
  }
}