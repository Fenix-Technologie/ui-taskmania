import { IUser } from "@/@types/user";
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

interface IContext {
    user: IUser;
    setLocalStorage: (data: any, key: string) => void;
    getLocalStorage: (key: string) => any;
    setUserFromLocalStorage: (data: IUser) => void;
}

interface customLocalStorageProviderProps {
    children: ReactNode;
}

const customLocalStorageContext = createContext({} as IContext)

export function CustomLocalStorageProvider({ children }: customLocalStorageProviderProps) {

    const [user, setUser] = useState<IUser>({} as IUser)

    const setLocalStorage = (data: any, key: string) => {
        localStorage.setItem(JSON.stringify(data), key)
    }

    const getLocalStorage = (key: string) => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
    }

    const setUserFromLocalStorage = useCallback((data: IUser) => {
        setUser(data)
    }, [])

    return (
        <customLocalStorageContext.Provider
            value={{
                user,
                setLocalStorage,
                getLocalStorage,
                setUserFromLocalStorage
            }}
        >
            {children}
        </customLocalStorageContext.Provider>
    )
}

export function useLocalStorage() {
    return useContext(customLocalStorageContext)
}