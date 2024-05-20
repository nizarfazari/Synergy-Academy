import express, { Express, Request, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import { addCars, deleteCars, getCars, getCarskById, updateCars } from "./server/api/cars";

import upload from "./server/middleware/multer";
import uploadOnMemory from "./server/middleware/multerMemory";
import path from "path";

const port = process.env.PORT || 5000;
const app: Express = express();
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

app.get("/api/v1/cars", getCars);
app.get("/api/v1/cars/:id", getCarskById);
app.delete("/api/v1/cars/:id", deleteCars);
app.post("/api/v1/cars", uploadOnMemory.single('image_url'), addCars)
app.put("/api/v1/cars/:id", uploadOnMemory.single('image_url'), updateCars)

app.listen(port, () => console.log(`app listen on http://localhost:${port}`));