import { useState , useEffect } from "react";
import axios from "axios";

export const useUser = userId => {

    const [user , setUser] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data)
        })()
    } , [])

    return user
    
}