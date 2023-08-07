import express from "express";
import { getProveedorDetallesOne, getProveedoresDetallesAll, postProveedoresDetalles } from "../controllers/proveedorDetalles.controller.js";

const router = express.Router();

router.get("/all", getProveedoresDetallesAll)
router.get("/one/:id", getProveedorDetallesOne);


export default router;