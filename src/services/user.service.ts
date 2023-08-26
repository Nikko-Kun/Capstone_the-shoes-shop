import { axiosWithoutAuth } from "./config.service";
import axios from "axios";

export const userLogin = async (data: { email: string; password: string }) => {
  try {
    const resp = await axiosWithoutAuth({
      method: "post",
      url: "/Users/signin",
      data,
    });

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async () => {
  const resp = await axios({
    url: "https://shop.cyberlearn.vn/api/Users/getProfile",
    method: "post",
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("accessToken") ?? ""
      )}`,
    },
  });

  return resp.data;
};
