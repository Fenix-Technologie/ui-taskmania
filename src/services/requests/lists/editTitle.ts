import { IList } from "@/@types/list";
import { api } from "@/services/api";

interface ListTitleProps {
  newTitle: string;
  boardId: string;
  listId: string;
}

export async function editTitleList(body: ListTitleProps) {
  const response = await api.patch<IList>("/lists/rename/", {
    ...body,
  });

  return response;
}