import express from "express";
import bodyParser from "body-parser";

import categorias_routes from "./routes/categorias_routes.js"

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }))

app.use("/categorias",categorias_routes)

app.listen(3000, () => {
  console.log("hola chamos")
});