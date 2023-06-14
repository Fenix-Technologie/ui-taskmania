import { api } from "@/services/api";
import { Iboard } from "@/@types/boards";


export async function GetBoardById(id: string) {
    const response = await api.get<Iboard>(`/boards/board/${id}`)

    return response.data
}