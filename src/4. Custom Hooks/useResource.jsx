// create a custom hook that will allow us to load any kind of resource  

import { useState , useEffect } from "react";
import axios from "axios";

export const useResource = resourceUrl => {
    const [resource , setResource] = useState({})

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            setResource(response.data)
        })
    } , [resource])

    return resource
}