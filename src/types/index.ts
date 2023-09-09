export type TCardItem = {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
};

export type TUserInfo = {
  id: number;
  username: string;
  email: string;
  sdt:string;
};
export type UserRegister = {
  "email": string,
  "password": string,
  "name": string,
  "gender": boolean,
  "phone": string
}