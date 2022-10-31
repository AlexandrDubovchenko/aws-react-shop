import * as Yup from "yup";

export const ProductSchema = Yup.object({
  id: Yup.string(),
  name: Yup.string().required().default(""),
  price: Yup.number().positive().required().defined().default(0),
  currency: Yup.string().required().default("$"),
  image: Yup.string().required().default(""),
});

export const AvailableProductSchema = ProductSchema.shape({
  count: Yup.number().integer().min(0).required().defined().default(0),
});

export type Product = Yup.InferType<typeof ProductSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;
