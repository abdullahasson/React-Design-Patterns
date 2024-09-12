import { useState , useEffect } from "react"

const ControlledForm = () => {
    const [name , setName] = useState('')
    const [nameInputError , setNameInputError] = useState()
 
    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('Name be two or more')
        } else {
            setNameInputError(null)
        }
    } , [name])

    const handleSubmit = e => {
        console.log(name)

        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            {nameInputError && <p>{nameInputError}</p>}

            <input type="submit" value='Submit' />
        </form>
    )
}

export default ControlledForm