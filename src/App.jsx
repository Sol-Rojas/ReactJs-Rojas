import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cards from './container/Cards';
import Details from './container/Details';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext'
import Footer from './components/Footer';

const App = () => {
  return (
   <CartContextProvider>
     <BrowserRouter>
        <Navbar />
        <Routes >
            <Route path="/" element={<Cards /> } />  
            <Route path="/catg/:id" element={<Cards /> } /> 
            <Route path="/detail/:id" element={<Details /> } />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
     </ BrowserRouter >
   </CartContextProvider>
  );
}

export default App;
