import { ICard } from "@/@types/cards";
import { api } from "@/services/api";

interface TaskProps {
  title: string;
  listId: string;
  boardId: string;
}

interface responseProps {
  card: ICard;
}

export async function createTask(body: TaskProps) {
  const response = await api.post<responseProps>("/cards/", {
    ...body,
  });

  return response;
}
