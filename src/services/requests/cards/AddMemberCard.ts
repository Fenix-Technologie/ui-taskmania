import { api } from "@/services/api";

interface ChangeCardProps{
    add: boolean
    cardId: string
    userId: string
    boardId: string
}

export async function AddMemberCard(body: ChangeCardProps) {
    const response = await api.put(`/cards/addMember/card/user`, {
        ...body
    })

    return response
}