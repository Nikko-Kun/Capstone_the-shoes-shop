import { axiosWithoutAuth } from "src/services/config.service";

 export const getAllProduct = async () => {
    const resp = await axiosWithoutAuth("/product")
    console.log(resp)
    return resp.data;
  }
  export const getProductById = async (id:string|number) =>{
    try {
      const resp = await axiosWithoutAuth(`/Product/getbyid?id=${id}`)
      return resp.data
    } catch (error) {
      console.log(error)
    }
  }
  export const getSearchProduct = async (name: string) => {
  
    // console.log(resp)
    try {
      const resp = await axiosWithoutAuth(`/Product?keyword=${name}`)
      return resp.data
    } catch (error) {
      console.log(error)
    }
    
  }