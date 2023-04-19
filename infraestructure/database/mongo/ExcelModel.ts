import { model, Schema } from 'mongoose';

export const EcxelModel = model<any>('ExcelUpload', new Schema({
    id: String,
    fileUrl: String,
    mapping: Object,
    status: String,
    errorCount: Number,
    createdAt: Date,
    updatedAt: Date,
  },{ timestamps: {} }));