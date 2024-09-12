const LargeProductListItem = ({ product }) => {

    const { name , price , description , rating } = product

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h4>Description:</h4>
            <p>{description}</p>
            <p>Average Rating: {rating}</p>
        </>
    )
}

export default LargeProductListItem