// Promesa con setTimeout
const getProducts = (products) => {
  return new Promise ((resolve, reject) => {

    setTimeout (() => {
      resolve(products);
    }, 2000);

  })
}

export default getProducts;