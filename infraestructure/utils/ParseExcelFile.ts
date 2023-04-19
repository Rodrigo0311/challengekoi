import xlsx from 'xlsx';
interface ColumnMapping {
    name: string;
    type: string;
  }
  
  interface ExcelMapping {
    [key: string]: ColumnMapping;
  }

  
  
  export const parseExcelFile = async (
    buffer: Buffer,
    mapping: ExcelMapping
  ): Promise<any> => {
    const workbook = xlsx.read(buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  
    const parsedData: any[] = [];
  
    const errors: { row: number; col: string; message: string }[] = [];
  
    const columnIndexes: { [key: string]: number } = {};
  
    for (const [key, value] of Object.entries(mapping)) {
      const columnIndex = xlsx.utils.decode_col(key);
      columnIndexes[value.name] = columnIndex;
    }
  
    const range = xlsx.utils.decode_range(worksheet['!ref']!);
  
    for (let rowIndex = range.s.r + 1; rowIndex <= range.e.r; rowIndex++) {
      const row = worksheet[xlsx.utils.encode_cell({ r: rowIndex, c: range.s.c })];
  
      const parsedRow: { [key: string]: any } = {};
  
      for (const [key, value] of Object.entries(mapping)) {
        const columnIndex = columnIndexes[value.name];
        const cell = worksheet[xlsx.utils.encode_cell({ r: rowIndex, c: columnIndex })];
  
        if (!cell) {
          continue;
        }
  
        let parsedCellValue: any;
        try {
          switch (value.type) {
            case 'string':
              parsedCellValue = cell.w;
              break;
            case 'number':
              parsedCellValue = Number(cell.w);
              if (isNaN(parsedCellValue)) {
                throw new Error('Invalid number format');
              }
              break;
            case 'boolean':
              parsedCellValue = cell.w.toLowerCase() === 'true';
              break;
            case 'date':
              parsedCellValue = new Date(cell.w);
              if (isNaN(parsedCellValue.getTime())) {
                throw new Error('Invalid date format');
              }
              break;
            default:
              throw new Error(`Unsupported type: ${value.type}`);
          }
        } catch (error) {
          errors.push({
            row: rowIndex,
            col: xlsx.utils.encode_col(columnIndex),
            message: error.message,
          });
          continue;
        }
  
        parsedRow[value.name] = parsedCellValue;
      }
  
      parsedData.push(parsedRow);
    }
  
    return {
      data: parsedData,
      errors: errors,
    };
  };