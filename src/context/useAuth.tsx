import { IUser, IauthUser } from "@/@types/user";
import { authUser } from "@/services/requests/auth/auth";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import Router from 'next/router'
import { refreshUser } from "@/services/requests/users/refreshUser";
import { randomColorGenerator } from "@/utils/randomColorGenerator";
import { api } from "@/services/api";


type TAvatarColors = {
    primary: string;
    secondary: string;
}

interface authProviderProps {
    children: ReactNode;
}
interface IContext {
    user: IUser | null;
    avatarColor: TAvatarColors | null
    isAuthenticated: boolean;
    handleSignIn: (data: IauthUser) => Promise<void>;
    handleSignOut: () => void;
}

const authContext = createContext({} as IContext)

export function AuthProvider({ children }: authProviderProps) {

    const [user, setUser] = useState<IUser | null>(null)
    const [avatarColor, setAvatarColor] = useState<TAvatarColors | null>(null)
    const isAuthenticated = !!user

    useEffect(() => {
        async function updateAfterRefresh() {
            const { "taskmania:token": token } = parseCookies();
            if (token) {
                const userUpdated = await refreshUser(token)
                setUser(userUpdated)
                setAvatarColor({
                    primary: randomColorGenerator(),
                    secondary: randomColorGenerator()
                })

            } else {
                Router.push('/signin')
            }
        }
        updateAfterRefresh()
    }, [])

    const handleSignIn = async (data: IauthUser) => {
        const { token, ...rest } = await authUser(data);
        if (token) {
            setCookie(undefined, 'taskmania:token', token,
                {
                    maxAge: 60 * 60 * 24 // 1 dia
                })
            api.defaults.headers['Authorization'] = 'Bearer ' + token
            setUser(rest)
            Router.push('/')
        }
    }

    const handleSignOut = async () => {
        destroyCookie(undefined, 'taskmania:token')
        setUser(null)
        Router.push('/')
    }


    return (
        <authContext.Provider
            value={{
                user,
                avatarColor,
                isAuthenticated,
                handleSignIn,
                handleSignOut
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export function useAuth() {
    return useContext(authContext)
}