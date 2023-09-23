import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";
import { createSlug } from "../helpers/slug.js";
import { cloudDelete, cloudUpload, cloudUploads } from "../utils/cloudinary.js";
import { findPublicId } from "../helpers/helpers.js";

/**
 * @DESC Get all products data
 * @ROUTE /api/v1/product
 * @method GET
 * @access public
 */
export const getAllProduct = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (products.length > 0) {
    return res.status(200).json(products);
  }

  return res.status(200).json({ message: "Product data not found" });
});

/**
 * @DESC Get Single products data
 * @ROUTE /api/v1/product/:id
 * @method GET
 * @access public
 */
export const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (product.length > 0) {
    return res.status(404).json({ message: "Product data not found" });
  }

  res.status(200).json(product);
});

/**
 * @DESC Create new Product
 * @ROUTE /api/v1/product
 * @method POST
 * @access public
 */
export const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    productType,
    productSimple,
    productVariable,
    productGroup,
    productExternal,
    shortDesc,
    longDesc,
  } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Product name is Required" });
  }

  // Product Check
  const productCheck = await Product.findOne({ name });

  if (productCheck) {
    return res.status(400).json({ message: "Product already exists" });
  }

  // file manage
  let productPhotos = [];
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      const fileData = await cloudUploads(req.files[i].path);
      productPhotos.push(fileData);
    }
  }

  const simpleData = JSON.parse(productSimple);

  // create new product
  const product = await Product.create({
    name,
    slug: createSlug(name),
    productType,
    productSimple:
      productType === "simple" ? { ...simpleData, productPhotos } : null,
    productVariable: productType === "variable" ? productVariable : null,
    productGroup: productType === "group" ? productGroup : null,
    productExternal: productType === "external" ? productExternal : null,
    shortDesc,
    longDesc,
  });

  res.status(200).json({ product, message: "Product created successful" });
});

/**
 * @DESC Delete Product
 * @ROUTE /api/v1/product/:id
 * @method DELETE
 * @access public
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  // delete product logo
  if (product.logo) {
    const publicId = findPublicId(product.logo);
    await cloudDelete(publicId);
  }

  res.status(200).json(product);
});

/**
 * @DESC Update Product
 * @ROUTE /api/v1/product/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Product name is required" });
  }

  const productUpdate = await Product.findById(id);

  if (!productUpdate) {
    return res.status(400).json({ message: "Product data not found" });
  }

  let updatedLogo = productUpdate.logo;

  if (req.file) {
    const logo = await cloudUpload(req);
    updatedLogo = logo.secure_url;
  }

  productUpdate.name = name;
  productUpdate.slug = createSlug(name);
  productUpdate.logo = updatedLogo;
  productUpdate.save();

  res
    .status(200)
    .json({ product: productUpdate, message: "Product Updated successful" });
});
