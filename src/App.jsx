import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './container/Cards';
import Details from './container/Details';
import Contact from './components/Contact';


const App = () => {
  return (
     <BrowserRouter>
        <Navbar />
        <Routes >
            <Route path="/" element={<Cards /> } />  
            <Route path="/catg/:id" element={<Cards /> } /> 
            <Route path="/detail/:id" element={<Details /> } />
            <Route path='/contact' element={<Contact />} />
        </Routes>
     </ BrowserRouter >
  );
}

export default App;
