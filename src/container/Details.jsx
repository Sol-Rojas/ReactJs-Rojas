import { useEffect, useState } from "react";
import Loader from '../components/Loader';
import CardDetail from "../components/CardDetail"
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Details = () => {
  
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(false);

  const { id } = useParams()

  useEffect( () => {

    setLoading(true)

    const getProducts = async () => { 
      const docSnap = await getDoc(doc(db, "instrumentos", id))

      return {id: id, ...docSnap.data()}
    }

    getProducts()

    .then(result => setData(result)) 

    .finally(() => setLoading(false))

  }, [id])

  return (
    <>
      <div className='container-prod d-flex flex-wrap route'>
        {loading ? <Loader /> : <CardDetail item={data} />}
      </div>
    </>
  );
}

export default Details;
