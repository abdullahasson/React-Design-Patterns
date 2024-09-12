import { useState , useEffect } from "react";
import axios from "axios";


export const useCurrentUser = () => {
    const [user , setUser] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('/people')
            setUser(response.data)
        })()
    } , [])

    return user
}