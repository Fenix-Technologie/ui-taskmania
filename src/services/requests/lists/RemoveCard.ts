import { api } from "@/services/api";

interface RemoveListProps {
    boardId: string
    listId: string
}

export async function RemoveList({ boardId, listId }: RemoveListProps) {
    const response = await api.delete(`/lists/list/${listId}/board/${boardId}`)

    return response
}