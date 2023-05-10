
export const loadingLocalStorage = (key: string) => {
    const item = localStorage.getItem(key)

    return item ? JSON.parse(item) : null
}