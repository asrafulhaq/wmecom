import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import Permission from "../models/Permission.js";
import { createSlug } from "../helpers/slug.js";

/**
 * @DESC Get all permissions data
 * @ROUTE /api/v1/permission
 * @method GET
 * @access public
 */
export const getAllPermission = asyncHandler(async (req, res) => {
  const permissions = await Permission.find();

  if (permissions.length > 0) {
    res.status(200).json(permissions);
  }
});

/**
 * @DESC Get Single permissions data
 * @ROUTE /api/v1/permission/:id
 * @method GET
 * @access public
 */
export const getSinglePermission = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const permission = await Permission.findById(id);

  if (!permission) {
    return res.status(404).json({ message: "Permission data not found" });
  }

  res.status(200).json(permission);
});

/**
 * @DESC Create new Permission
 * @ROUTE /api/v1/permission
 * @method POST
 * @access public
 */
export const createPermission = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Permission name is Required" });
  }

  // Permission Check
  const permissionCheck = await Permission.findOne({ name });

  if (permissionCheck) {
    return res.status(400).json({ message: "Permission already exists" });
  }

  // create new permission
  const permission = await Permission.create({
    name,
    slug: createSlug(name),
  });

  res
    .status(200)
    .json({ permission, message: "Permission Created successful" });
});

/**
 * @DESC Delete Permission
 * @ROUTE /api/v1/permission/:id
 * @method DELETE
 * @access public
 */
export const deletePermission = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const permission = await Permission.findByIdAndDelete(id);
  res
    .status(200)
    .json({ permission, message: "Permission deleted successful" });
});

/**
 * @DESC Update Permission
 * @ROUTE /api/v1/permission/:id
 * @method PUT/PATCH
 * @access public
 */
export const updatePermission = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Permission name is required" });
  }

  const permission = await Permission.findByIdAndUpdate(
    id,
    {
      name,
      slug: createSlug(name),
    },
    { new: true }
  );

  res.status(200).json(permission);
});

/**
 * @DESC Update Permission
 * @ROUTE /api/v1/permission/:id
 * @method PUT/PATCH
 * @access public
 */
export const updatePermissionStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const permission = await Permission.findByIdAndUpdate(
    id,
    {
      status: !status,
    },
    { new: true }
  );

  res.status(200).json({ permission, message: "Status updated successful" });
});
