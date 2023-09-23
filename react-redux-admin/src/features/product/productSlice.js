import { createSlice } from "@reduxjs/toolkit";
import {
  createBrand,
  createProductCategories,
  createProductTag,
  deleteBrand,
  getAllBrand,
  getProductTCategories,
  getProductTags,
} from "./productApiSlice";

// create auth slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    brand: null,
    category: null,
    tag: null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brand = state.brand ?? [];
        state.brand.push(action.payload.brand);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(getAllBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.brand = action.payload.brands;
        state.loader = false;
      })
      .addCase(deleteBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.brand = state.brand.filter(
          (item) => item._id != action.payload.brand._id
        );
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createProductTag.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createProductTag.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createProductTag.fulfilled, (state, action) => {
        state.tag = state.tag ?? [];
        state.tag.push(action.payload.tag);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(getProductTags.fulfilled, (state, action) => {
        state.tag = action.payload.tags;
      })
      .addCase(getProductTCategories.fulfilled, (state, action) => {
        state.category = action.payload.categories;
      })
      .addCase(createProductCategories.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createProductCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createProductCategories.fulfilled, (state, action) => {
        state.category = state.category ?? [];
        state.category.push(action.payload.category);
        state.message = action.payload.message;
        state.loader = false;
      });
  },
});
// selectors
// actions
export const { setMessageEmpty } = productSlice.actions;

// export
export default productSlice.reducer;
