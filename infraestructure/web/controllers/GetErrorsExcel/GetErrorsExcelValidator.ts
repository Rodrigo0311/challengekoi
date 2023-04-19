export const validatePage = (page: number): number => {
    if (!Number.isInteger(page) || page < 1 || !page) {
      throw new Error('Invalid page number');
    }
    return page;
  };
  
  export const validateLimit = (limit: number): number => {
    if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
      throw new Error('Invalid limit number');
    }
    return limit;
  };
  
  export const validateRow = (row: number): number => {
    if (!Number.isInteger(row) || row < 1) {
      throw new Error('Invalid row number');
    }
    return row;
  };