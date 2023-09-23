import asyncHandler from "express-async-handler";
import Category from "../models/Category.js";
import { createSlug } from "../helpers/slug.js";
import { cloudDelete, cloudUpload } from "../utils/cloudinary.js";
import { findPublicId } from "../helpers/helpers.js";

/**
 * @DESC Get all categorys data
 * @ROUTE /api/v1/category
 * @method GET
 * @access public
 */
export const getAllCategory = asyncHandler(async (req, res) => {
  const categories = await Category.find().populate([
    {
      path: "subCategory",
      populate: {
        path: "subCategory",
        populate: {
          path: "subCategory",
        },
      },
    },
    {
      path: "parentCategory",
      populate: {
        path: "parentCategory",
        populate: {
          path: "parentCategory",
        },
      },
    },
  ]);

  if (categories.length > 0) {
    return res
      .status(200)
      .json({ categories, message: "Category added successful" });
  }

  return res.status(200).json({ message: "Category data not found" });
});

/**
 * @DESC Get Single categorys data
 * @ROUTE /api/v1/category/:id
 * @method GET
 * @access public
 */
export const getSingleCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id).populate([
    {
      path: "subCategory",
      populate: {
        path: "subCategory",
        populate: {
          path: "subCategory",
        },
      },
    },
    pe,
  ]);

  if (category.length > 0) {
    return res.status(404).json({ message: "Category data not found" });
  }

  res.status(200).json(category);
});

/**
 * @DESC Create new Category
 * @ROUTE /api/v1/category
 * @method POST
 * @access public
 */
export const createCategory = asyncHandler(async (req, res) => {
  const { name, parentCategory, icon } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is Required" });
  }

  // Category Check
  const categoryCheck = await Category.findOne({ name });

  if (categoryCheck) {
    return res.status(400).json({ message: "Category already exists" });
  }

  // category icon
  let catIcon = null;
  if (icon) {
    catIcon = icon;
  }

  // category photo manage
  let catPhoto = null;

  if (req.file) {
    const cat = await cloudUpload(req);
    catPhoto = cat.secure_url;
  }

  // create new category
  const category = await Category.create({
    name,
    slug: createSlug(name),
    parentCategory: parentCategory ? parentCategory : null,
    icon: catIcon,
    photo: catPhoto,
  });

  if (parentCategory) {
    const parent = await Category.findByIdAndUpdate(parentCategory, {
      $push: { subCategory: category._id },
    });
  }

  res.status(200).json({ category, message: "Category created successful" });
});

/**
 * @DESC Delete Category
 * @ROUTE /api/v1/category/:id
 * @method DELETE
 * @access public
 */
export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);

  if (category.photo) {
    await cloudDelete(findPublicId(category.photo));
  }

  res.status(200).json(category);
});

/**
 * @DESC Update Category
 * @ROUTE /api/v1/category/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, parentCategory, icon } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }

  const catUpdate = await Category.findById(id);

  if (!catUpdate) {
    return res.status(400).json({ message: "Category not found" });
  }

  // parent category update
  let parentCat = catUpdate.parentCategory;
  if (parentCategory) {
    parentCat = parentCategory;
  }

  // parent category update
  let catIcon = catUpdate.icon;
  if (icon) {
    catIcon = iocn;
  }

  // file update
  let catFile = catUpdate.photo;

  if (req.file) {
    const catPhoto = await cloudUpload(req);
    catFile = catPhoto.secure_url;

    await cloudDelete(findPublicId(catUpdate.photo));
  }

  catUpdate.name = name;
  catUpdate.slug = createSlug(name);
  catUpdate.parentCategory = parentCat;
  catUpdate.icon = catIcon;
  catUpdate.photo = catFile;
  catUpdate.save();

  res
    .status(200)
    .json({ category: catUpdate, message: "Category Updated successful" });
});
