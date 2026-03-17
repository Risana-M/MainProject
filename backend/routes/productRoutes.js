

import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();

router.post("/add", productController.createProduct);

router.put("/admin/update/:id", productController.updateProduct);

router.delete("/admin/delete/:id", productController.deleteProduct);

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

export default router;