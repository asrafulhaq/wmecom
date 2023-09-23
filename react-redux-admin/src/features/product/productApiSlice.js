import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all brands
export const getAllBrand = createAsyncThunk("product/getAllBrand", async () => {
  try {
    const response = await axios.get("http://localhost:5050/api/v1/brand", {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// create brand
export const createBrand = createAsyncThunk(
  "product/createBrand",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/brand",
        data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get all brands
export const deleteBrand = createAsyncThunk(
  "product/deleteBrand",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/brand/${id}`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create a product tag
export const getProductTags = createAsyncThunk(
  "product/getProductTags",
  async () => {
    try {
      const response = await axios.get(`http://localhost:5050/api/v1/tag`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create a product tag
export const createProductTag = createAsyncThunk(
  "product/createProductTag",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/tag`,
        data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create a product category
export const getProductTCategories = createAsyncThunk(
  "product/getProductTCategories",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/category`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// create a product category
export const createProductCategories = createAsyncThunk(
  "product/createProductCategories",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/category`,
        data,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
