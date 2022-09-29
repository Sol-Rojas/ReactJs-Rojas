import { useEffect, useState } from 'react';
// import getProducts from '../utils/getProducts';
import Loader from '../components/Loader';
import CardDetail from "../components/CardDetail"
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const Details = () => {
  const [arrayList, setArrayList] = useState([]);

  const [loading, setLoading] = useState(false);

  const { id } = useParams()

  useEffect(() => {

    setLoading(true);

    const docFetch = async () => {
      const docFire = doc(db, "instrumentos", id);

      const docSnap = await getDoc(docFire);

      setArrayList(docSnap.data())

      setLoading(false)
    }

    docFetch()

    /*   
      fetch(`/instrumentos.json`) // Traigo los productos del json
      .then((res) => res.json())
      .then(dataFromDB => {

        getProducts(dataFromDB.find(product => product.id == id))
          .then((data) => setArrayList(data))
          .catch((err) => console.error(err))
          .finally(() => setLoading(false))
      }) */
  }, [id])

  return (
    // Ejecuto el componente Loader mientras el objeto no este listo para ser usado
    <>
      <div className='container-prod d-flex flex-wrap route'>
        {loading ? <Loader /> : <CardDetail item={arrayList} />}
      </div>
    </>
  );
}

export default Details;
