import { api } from '../../api'

interface createUserProps {
    name: string;
    email: string;
    password: string
}

type Tresponse = {
    name: string;
    email: string;
    avatar: string;
    token: string;
}

export const createUser = async (body: createUserProps) => {
    const response = await api.post<Tresponse>("/users/", {
        ...body
    })

    return response.data

} 