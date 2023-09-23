import express from "express";
import multer from "multer";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getSingleBrand,
  updateBrand,
} from "../controllers/brandController.js";
import { brandLogo } from "../utils/multer.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllBrand).post(brandLogo, createBrand);
router
  .route("/:id")
  .get(getSingleBrand)
  .delete(deleteBrand)
  .put(brandLogo, updateBrand)
  .patch(brandLogo, updateBrand);

// export default router
export default router;
