import { model, Schema } from 'mongoose';

export const EcxelErrorModel = model<any>('ExcelErrorUpload', new Schema({
    id: String,
    row: Number,
    column: String,
    message: String,
    uploadId: String,
  },{ timestamps: {} }));