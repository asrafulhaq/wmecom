import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    productType: {
      type: String,
      enum: ["simple", "variable", "group", "external"],
      default: "simple",
    },
    productSimple: {
      regularPrice: {
        type: Number,
      },
      salePrice: {
        type: Number,
        default: 0,
      },
      productPhotos: {
        type: [String],
      },
      stock: {
        type: Number,
        default: 0,
      },
    },
    productVariable: [
      {
        size: {
          type: String,
          default: null,
        },
        color: {
          type: String,
          default: null,
        },
        regularPrice: {
          type: Number,
          required: true,
        },
        salePrice: {
          type: Number,
          default: 0,
        },
        productPhotos: {
          type: [String],
          required: true,
        },
        stock: {
          type: Number,
          default: 0,
        },
      },
    ],
    productGroup: [
      {
        name: {
          type: String,
          required: true,
        },
        regularPrice: {
          type: Number,
          required: true,
        },
        salePrice: {
          type: Number,
          default: 0,
        },
        productPhotos: {
          type: [String],
          required: true,
        },
        stock: {
          type: Number,
          default: 0,
        },
      },
    ],
    productExternal: {
      regularPrice: {
        type: Number,
      },
      salePrice: {
        type: Number,
        default: 0,
      },
      productPhotos: {
        type: [String],
      },
      stock: {
        type: Number,
        default: 0,
      },
      link: {
        type: String,
      },
    },
    shortDesc: {
      type: String,
      required: true,
    },
    longDesc: {
      type: String,
      required: true,
    },
    specification: {
      type: String,
    },
    reviews: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Reviews",
      default: null,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
