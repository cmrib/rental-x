import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategories: ListCategoriesUseCase) {
    console.log("createCategoryUseCase");
  }

  handle(request: Request, response: Response): Response {
    const all = this.listCategories.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
