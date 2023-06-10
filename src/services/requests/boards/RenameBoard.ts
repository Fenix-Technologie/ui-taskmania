import { api } from "@/services/api";

interface BoardProps {
    title: string
    boardId: string
  }

export async function RenameBoard(body: BoardProps) {
    const response = await api.patch(`/boards/rename/board`, {
        ...body
    })

    return response
}