import { IList } from "@/@types/list";
import { api } from "@/services/api";

interface ListProps {
  title: string;
  boardId: string;
}

export async function createList(body: ListProps) {
  const response = await api.post<IList>("/lists/", {
    ...body,
  });

  return response.data;
}
