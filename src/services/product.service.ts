import { axiosWithoutAuth } from "./config.service";

export const getAllProduct = async () => {
  const resp = await axiosWithoutAuth("/product");

  return resp.data;
};
