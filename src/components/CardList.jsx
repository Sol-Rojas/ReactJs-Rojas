import Card from "./Card"

const CardList = ({products}) => {
    return(
        <>
          {products.map( (product) => <Card key= {product.id} product = {product} />)}
        </>
    )
}

export default CardList;