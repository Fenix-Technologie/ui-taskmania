import { Iboard } from "@/@types/boards";
import { api } from "../../api";

export async function getYourBoards() {
  const response = await api.get<Iboard[]>("/boards/user");

  return response.data;
}
