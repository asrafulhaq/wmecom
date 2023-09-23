import asyncHandler from "express-async-handler";
import Tag from "../models/Tag.js";
import { createSlug } from "../helpers/slug.js";

/**
 * @DESC Get all tags data
 * @ROUTE /api/v1/tag
 * @method GET
 * @access public
 */
export const getAllTag = asyncHandler(async (req, res) => {
  const tags = await Tag.find();

  if (tags.length > 0) {
    return res.status(200).json({ tags });
  }

  return res.status(200).json({ message: "Tag data not found" });
});

/**
 * @DESC Get Single tags data
 * @ROUTE /api/v1/tag/:id
 * @method GET
 * @access public
 */
export const getSingleTag = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const tag = await Tag.findById(id);

  if (tag.length > 0) {
    return res.status(404).json({ message: "Tag data not found" });
  }

  res.status(200).json({ tag, message: "Tag created successful" });
});

/**
 * @DESC Create new Tag
 * @ROUTE /api/v1/tag
 * @method POST
 * @access public
 */
export const createTag = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Tag name is Required" });
  }

  // Tag Check
  const tagCheck = await Tag.findOne({ name });

  if (tagCheck) {
    return res.status(400).json({ message: "Tag already exists" });
  }

  // create new tag
  const tag = await Tag.create({
    name,
    slug: createSlug(name),
  });

  res.status(200).json({ tag, message: "Tag created successful" });
});

/**
 * @DESC Delete Tag
 * @ROUTE /api/v1/tag/:id
 * @method DELETE
 * @access public
 */
export const deleteTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const tag = await Tag.findByIdAndDelete(id);
  res.status(200).json(tag);
});

/**
 * @DESC Update Tag
 * @ROUTE /api/v1/tag/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Tag name is required" });
  }

  const tag = await Tag.findByIdAndUpdate(
    id,
    {
      name,
      slug: createSlug(name),
    },
    { new: true }
  );

  res.status(200).json({ tag, message: "Tag Updated successful" });
});
