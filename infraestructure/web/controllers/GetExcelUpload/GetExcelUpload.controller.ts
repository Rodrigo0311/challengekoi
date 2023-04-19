import { Request, Response } from "express";
import { excelUploadUseCase } from "../../../../application/use-cases"

export class GetExcelUploadController {

  async handle(request: Request, response: Response) {

    
    
    try {

        const id = request.params.id

        if(!id) throw new Error('id is mandatory')

        const data = await excelUploadUseCase.execute(id)

        return response.status(201).json(data);
        
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}