import { IList } from "@/@types/list";
import { api } from "@/services/api";

interface ListProps {
    boardId: string
    listToChangeCardsOrder: IList[]
}

export async function changeCardsOrder(body: ListProps) {
    const response = await api.put<IList>("/lists/change/cards", {
        ...body,
    });

    return response.data;
}
