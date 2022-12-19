import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listCategories: ListCategoriesUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listCategories.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
