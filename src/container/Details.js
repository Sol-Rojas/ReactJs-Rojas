import { useEffect, useState } from 'react';
import getProducts from '../utils/getProducts';
import Loader from '../components/Loader';
import CardDetail from "../components/CardDetail"

const Details = () => {
    const [arrayList, setArrayList] = useState([]);

    const [loading, setLoading] = useState (false);

    useEffect (() => {

        setLoading(true);
    
        fetch(`instrumentos.json`) // Traigo los productos del json
        .then((res) => res.json())
        .then(dataFromDB => {
    
          getProducts(dataFromDB[1]) 
          .then((data) => setArrayList(data)) 
          .catch((err) => console.error(err))
          .finally(() => setLoading(false))
        })
    
      }, [])
    return (
        // Ejecuto el componente Loader mientras el objeto no este listo para ser usado
        <>
            {loading ? <Loader /> : <CardDetail item={arrayList} />} 
        </>
    );
}

export default Details;
