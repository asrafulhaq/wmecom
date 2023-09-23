import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { catgoryPhoto } from "../utils/multer.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllCategory).post(catgoryPhoto, createCategory);
router
  .route("/:id")
  .get(getSingleCategory)
  .delete(deleteCategory)
  .put(catgoryPhoto, updateCategory)
  .patch(catgoryPhoto, updateCategory);

// export default router
export default router;
