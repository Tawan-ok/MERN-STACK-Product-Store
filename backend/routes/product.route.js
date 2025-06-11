import express from 'express';
import { createProduct, deleteProduct, getProdcuts, getProduct, updateProduct } from '../controllers/prodcut.controller.js';
const router = express.Router();

router.get("/", getProdcuts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);


export default router;