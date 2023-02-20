import { useEffect, useState } from "react";
//gets the value from local storage or going to give the initial value we passed in
export function useLocalStorage<T>(key: string, 
initialValue:T | (()=> T)){
    const [value, setValue] = useState<T>(()=> {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if(typeof initialValue === "function") {
            return (initialValue as () => T)()
        } else {
            return initialValue
        }
    })

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))

    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue]
}