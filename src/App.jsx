import './App.css';
import Cards from './container/Cards';
import Title from './components/Title';
import Navbar from './components/Navbar';

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
