export class ExcelError {
    id: string;
    uploadId: string;
    row: number;
    column: string;
    message: string;
  
    constructor(uploadId: string, row: number, column: string, message: string) {
      this.uploadId = uploadId;
      this.row = row;
      this.column = column;
      this.message = message;
    }
  }