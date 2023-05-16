import { api } from "@/services/api";

interface BoardProps {
  title: string;
  backgroundURL: string;
  description: string;
}

interface responeProps {
  _id: string;
}

export async function createBoard(body: BoardProps) {
  const response = await api.post<responeProps>("/boards/", {
    ...body,
  });

  return response.data;
}
