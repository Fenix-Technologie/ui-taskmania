import { TmembersBoard } from "@/@types/boards";
import { api } from "@/services/api";

interface BoardProps {
  boardId: string;
  email: string;
}

export async function addMember(body: BoardProps) {
  const response = await api.patch<TmembersBoard>("/boards/board/addMember", {
    ...body,
  });

  return response.data;
}
