import asyncHandler from "express-async-handler";
import Brand from "../models/Brand.js";
import { createSlug } from "../helpers/slug.js";
import { cloudDelete, cloudUpload } from "../utils/cloudinary.js";
import { findPublicId } from "../helpers/helpers.js";

/**
 * @DESC Get all brands data
 * @ROUTE /api/v1/brand
 * @method GET
 * @access public
 */
export const getAllBrand = asyncHandler(async (req, res) => {
  const brands = await Brand.find();

  if (brands.length > 0) {
    return res.status(200).json({ brands });
  }

  return res.status(200).json({ message: "Brand data not found" });
});

/**
 * @DESC Get Single brands data
 * @ROUTE /api/v1/brand/:id
 * @method GET
 * @access public
 */
export const getSingleBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const brand = await Brand.findById(id);

  if (brand.length > 0) {
    return res.status(404).json({ message: "Brand data not found" });
  }

  res.status(200).json({ brand, message: "Brand created successful" });
});

/**
 * @DESC Create new Brand
 * @ROUTE /api/v1/brand
 * @method POST
 * @access public
 */
export const createBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Brand name is Required" });
  }

  // Brand Check
  const brandCheck = await Brand.findOne({ name });

  if (brandCheck) {
    return res.status(400).json({ message: "Brand already exists" });
  }

  let logoData = null;
  if (req.file) {
    logoData = await cloudUpload(req);
  }

  // create new brand
  const brand = await Brand.create({
    name,
    slug: createSlug(name),
    logo: logoData.secure_url,
  });

  res.status(200).json({ brand, message: "Brand created successful" });
});

/**
 * @DESC Delete Brand
 * @ROUTE /api/v1/brand/:id
 * @method DELETE
 * @access public
 */
export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const brand = await Brand.findByIdAndDelete(id);

  // delete brand logo
  if (brand.logo) {
    const publicId = findPublicId(brand.logo);
    await cloudDelete(publicId);
  }

  res.status(200).json({ brand, message: "Brand Data Deleted" });
});

/**
 * @DESC Update Brand
 * @ROUTE /api/v1/brand/:id
 * @method PUT/PATCH
 * @access public
 */
export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Brand name is required" });
  }

  const brandUpdate = await Brand.findById(id);

  if (!brandUpdate) {
    return res.status(400).json({ message: "Brand data not found" });
  }

  let updatedLogo = brandUpdate.logo;

  if (req.file) {
    const logo = await cloudUpload(req);
    updatedLogo = logo.secure_url;
  }

  brandUpdate.name = name;
  brandUpdate.slug = createSlug(name);
  brandUpdate.logo = updatedLogo;
  brandUpdate.save();

  res
    .status(200)
    .json({ brand: brandUpdate, message: "Brand Updated successful" });
});
