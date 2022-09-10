import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Title from './components/Title';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Title greeting="Productos destacados" />
      <main className='d-flex flex-wrap'>
        <ItemListContainer img="https://bairesrocks.vteximg.com.br/arquivos/ids/236251/GP-310WE_8.jpg?v=637837506252130000" name="Piano Celviano" marca="Casio"/>
        <ItemListContainer img="https://bairesrocks.vteximg.com.br/arquivos/ids/238330/YAM-TRBX174DBM_v.jpg?v=637951335785500000" name="Guitarra Electrica" marca="Yamaha"/>
        <ItemListContainer img="https://bairesrocks.vteximg.com.br/arquivos/ids/237876/YAM-PAC120HBL-02.jpg?v=637930960267530000" name="Redoblante" marca="Yamaha"/>
        <ItemListContainer img="https://bairesrocks.vteximg.com.br/arquivos/ids/222315/0107112841_gtr_frt_001_rr.jpg?v=637468491117700000" name="Guitarra Electrica" marca="Fender"/>
        <ItemListContainer img="https://bairesrocks.vteximg.com.br/arquivos/ids/228864/Flauta_Knighe_Tecnica-02.jpg?v=637617411942330000" name="Saxofon" marca="Knight"/>
      </main>
    </>
  );
}

export default App;
