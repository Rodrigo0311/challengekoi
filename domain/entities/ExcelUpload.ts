export class ExcelUpload {
  public id: string;
  public fileName: string;
  public mapping: string;
  public callback: string;

  public status: string;
  public errorCount: number;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(
    fileName: string,
    mapping: string,
    status: string,
    errorCount: number,
    callback: string
  ) {
    this.fileName = fileName;
    this.mapping = mapping;
    this.status = status;
    this.errorCount = errorCount;
    this.callback = callback;

  }
}