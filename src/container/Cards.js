import { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import getCards from '../utils/getProducts';
import Loader from '../components/Loader';

const Cards = () => {

  const [arrayList, setArrayList] = useState([]);

  const [loading, setLoading] = useState (false);

  useEffect (() => {

    setLoading(true);

    getCards()

    .then((response)=> setArrayList(response))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false))

  }, [])

  return (
    <>
      {loading ? <Loader /> : <CardList products = {arrayList} /> }
    </>
   )
}

export default Cards;