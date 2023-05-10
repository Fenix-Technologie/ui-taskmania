export const saveLocalStorage = (data: any, key: string) => {
    localStorage.setItem(JSON.stringify(data), key)
}