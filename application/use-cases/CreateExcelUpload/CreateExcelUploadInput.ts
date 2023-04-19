import { Express } from "express";

export interface CreateExcelUploadInput {
    file: Express.Multer.File;
    mapping:  string;
    callbackUrl: string;
  }

  export interface UpdateExcelUploadInput {
    status: string;
    errorCount?: number;
  }