import { api } from "@/services/api";

interface RemoveCardProps {
    cardId: string
    userId: string
    boardId: string
    listId: string
}

export async function RemoveCard({ cardId, userId, boardId, listId }: RemoveCardProps) {
    const response = await api.delete(`/cards/card/remove/user/${userId}/board/${boardId}/list/${listId}/card/${cardId}`)

    return response
}