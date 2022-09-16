import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import getProducts from '../utils/getProducts';
import Loader from '../components/Loader';

const Cards = () => {

  const [arrayList, setArrayList] = useState([]);

  const [loading, setLoading] = useState (false);

  useEffect (() => {

    setLoading(true);

    fetch(`instrumentos.json`) // Traigo los productos del json
    .then((res) => res.json())
    .then(dataFromDB => {

      getProducts(dataFromDB) 
      .then((data) => setArrayList(data)) 
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
    })

  }, [])

  return (
    // Ejecuto el componente Loader mientras el objeto no este listo para ser usado
    <>
      {loading ? <Loader /> : <CardList products = {arrayList} /> }
    </>
   )
}

export default Cards;