export interface ErrorFilter {
    row?: number;
    column?: string;
    uploadId?: string,
  }
  
  export interface PagedResult<T> {
    total: number;
    page: number;
    limit: number;
    data: T[];
  }
  