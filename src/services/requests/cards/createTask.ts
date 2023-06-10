import { ICard } from "@/@types/cards";
import { api } from "@/services/api";

interface TaskProps {
    title: string,
    listId: string,
    boardId: string
}

export async function createTask(body: TaskProps) {
  const response = await api.post<ICard>("/cards/", {
    ...body,
  });

  return response;
}
