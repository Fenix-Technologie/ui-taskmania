import { api } from "../../api";

type Tresponse = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  token: string;
};

export const refreshUser = async (token: string) => {
  const response = await api.get<Tresponse>(`/users/${token}`);

  return response.data;
};
