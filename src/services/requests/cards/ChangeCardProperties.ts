import { api } from "@/services/api";

interface ChangeCardProps{
    cardId: string 
    title: string
    description: string
    deadline: Date
    priority: string
    background: string
    boardId: string
}

export async function ChangeCardProperties(body: ChangeCardProps) {
    const response = await api.patch('/cards/edit/card/', {
        ...body
    })

    return response
}