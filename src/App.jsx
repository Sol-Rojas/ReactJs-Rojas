import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
//  import Cards from './container/Cards';
import Details from './container/Details';

const App = () => {
  return (
    <>
      <Navbar />
      <Title greeting="Detalle del producto" />
      <main className='d-flex flex-wrap'>
        {/* <Cards />    */}
        <Details/> 
      </main>
    </>
  );
}

export default App;
