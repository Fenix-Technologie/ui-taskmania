import { api } from '../../api'

interface authUserProps {
    email: string;
    password: string
}

type Tresponse = {
    name: string;
    email: string;
    avatar: string;
    token: string;
}

export const authUser = async (body: authUserProps) => {
    const response = await api.post<Tresponse>("/auth/", {
        ...body
    })

    return response.data
} 