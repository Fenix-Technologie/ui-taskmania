import { IauthUser } from "@/@types/user";
import { api } from "../../api";

type Tresponse = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  token: string;
};

export const authUser = async (body: IauthUser) => {
  const response = await api.post<Tresponse>("/auth/", {
    ...body,
  });

  return response.data;
};
