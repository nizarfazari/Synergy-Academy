import express, { Express } from "express";
import knex from "knex";
import { Model } from "objection";
import { userRouter } from "./route/user-api";
import { publicRouter } from "./route/public-api";
import { errorMiddleware } from "./middleware/error-middlewate";
import path from "path";

export const app: Express = express();
//knex
const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "cars_db",
    user: "postgres",
    password: "root",
  },
});

Model.knex(knexInstance);
app.use("/public", express.static(path.resolve(__dirname, "public")));
app.use(express.json());
app.use(publicRouter);
app.use(userRouter);
app.use(errorMiddleware);
