import { useState , useEffect } from "react";

export const useDataSource = getResourceFunc => {
    const [resource , setResource] = useState({})

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc
            setResource(result.data)
        })
    } , [getResourceFunc])

    return resource
}