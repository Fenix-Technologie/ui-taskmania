import { api } from "@/services/api";

interface RemoveProps{
    boardId: string
    userId: string
}

export async function RemoveMember({boardId, userId}: RemoveProps) {
    const response = await api.patch('/boards/board/member/remove', {
        boardId,
        userId
    })

    return response
}