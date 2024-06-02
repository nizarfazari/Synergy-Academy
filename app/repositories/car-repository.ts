import { Cars, CarsModel } from "../model/car";

export default class CarsRepostory {
  async create(createArgs: Cars) {
    return CarsModel.query().insert(createArgs).returning("*");
  }
}
