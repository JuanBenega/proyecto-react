import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Navb from './components/Navbar/Navbar';
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
            <Route path='detail/:id' element={<ItemDetailContainer />} />
            <Route path='login' element={<h2>LOGIN DE USUARIO</h2>} />
            <Route path='category/:catId' element={<ItemListContainer />} />
            <Route path='cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ CartProvider>
  )
}

export default App;
