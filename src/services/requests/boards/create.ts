import { api } from "@/services/api";

interface BoardProps {
  title: string;
  backgroundURL: string;
  description: string;
}

export async function createBoard(body: BoardProps) {
  const response = await api.post<BoardProps>("/boards/", {
    ...body,
  });

  return response.data;
}
