import { Cars, CarsModel } from "../model/car";

export default class CarsRepostory {
  static async create(createArgs: Cars) {
    return CarsModel.query().insert(createArgs).returning("*");
  }
}
