const LargePersonListItem = ({
    person 
}) => {

    const { name , age , hairColor , hobbies } = person

    return (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h4>Hobbies:</h4>
            <ul>
                {hobbies.map(hobby => (
                    <li key={hobby}>
                        {hobby}
                    </li>
                ))}
            </ul>
        </>
    )

}

export default LargePersonListItem