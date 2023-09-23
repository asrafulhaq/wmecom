import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import {
  createTag,
  deleteTag,
  getAllTag,
  getSingleTag,
  updateTag,
} from "../controllers/tagController.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route
router.route("/").get(getAllTag).post(createTag);
router
  .route("/:id")
  .get(getSingleTag)
  .delete(deleteTag)
  .put(updateTag)
  .patch(updateTag);

// export default router
export default router;
