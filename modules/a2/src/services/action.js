import product from "./product";

export const getOneProduct = async function () {
  const response = await product.get("/product");
  return response.data[0];
};

export const addProduct = async (data) => {
  return await product.post("/product", data);
};
