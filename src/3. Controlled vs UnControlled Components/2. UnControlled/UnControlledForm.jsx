import { useRef } from "react"

const UnControlledForm = () => {
    const nameInput = useRef()

    const handleSubmit = e => {
        console.log(nameInput.current.value)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={nameInput} />
            <input type="submit" value='Submit' />
        </form>
    )
}

export default UnControlledForm