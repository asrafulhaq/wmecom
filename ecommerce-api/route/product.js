import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";
import { productPhoto } from "../utils/multer.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllProduct).post(productPhoto, createProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .put(updateProduct)
  .patch(updateProduct);

// export default router
export default router;
