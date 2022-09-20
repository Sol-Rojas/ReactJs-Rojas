import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import getProducts from '../utils/getProducts';
import Loader from '../components/Loader';

const Cards = () => {

  const [arrayList, setArrayList] = useState([]);

  const [loading, setLoading] = useState (false);

  const {id} = useParams()

  useEffect (() => {

    setLoading(true);

    fetch(`/instrumentos.json`) // Traigo los productos del json
    .then(res => res.json())
    .then(dataFromDB => {

      if (id != undefined) {
        getProducts(dataFromDB.filter(product => product.catg == id)) 
        .then((data) => setArrayList(data)) 
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
      } else {
        getProducts(dataFromDB) 
        .then((data) => setArrayList(data)) 
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
      }

    })

  }, [id])

  return (
    // Ejecuto el componente Loader mientras el objeto no este listo para ser usado
    <>
      <div className='d-flex flex-wrap route'>
        {loading ? <Loader /> : <CardList products = {arrayList} /> }
      </div>
    </>
   )
}

export default Cards;