const SmallProdactListItem = ({ product }) => {

    const { name , price } = product

    return (
        <h3>Name: <em>{name}</em> _ price: <em>{price}</em></h3>
    )
}

export default SmallProdactListItem