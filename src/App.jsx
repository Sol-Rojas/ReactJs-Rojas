import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Cards from './container/Cards';

const App = () => {
  return (
    <>
      <Navbar />
      <Title greeting="Productos destacados" />
      <main className='d-flex flex-wrap'>
        <Cards />
      </main>
    </>
  );
}

export default App;
