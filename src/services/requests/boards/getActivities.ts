import { api } from "@/services/api";

interface GetActivitesProps{
    boardId: string
}

export async function GetActivites({boardId}: GetActivitesProps) {
    const response = await api.get(`boards/activity/board/${boardId}`)

    return response
}