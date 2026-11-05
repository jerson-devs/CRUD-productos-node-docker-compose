const express = require("express");
const productoController = require("./../controllers/producto.controller")

const Route = express.Router();

Route.get("/producto", productoController.listar); // listar
Route.post("/producto", productoController.guardar); // guardar
Route.get("/producto/:id", productoController.mostrar); // mostrar por id
Route.put("/producto/:id", productoController.modificar); // modificar por id
Route.delete("/producto/:id", productoController.eliminar); // eliminar por id

module.exports = Route;
