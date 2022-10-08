import Card from "./Card";

const CardList = ({ products }) => {
  return (
    <>
      {products.map((product =>
        <Card
          key={product.id}
          id={product.id}
          img={product.img}
          name={product.name}
          precio={product.precio}
          stock={product.stock}
          product={product} 
        />
      ))}
    </>
  )
}

export default CardList;