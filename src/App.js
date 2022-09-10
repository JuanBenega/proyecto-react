import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
            <Route path='detail/:id' element={<ItemDetailContainer />} />
            <Route path='contact' element={<h2>LOGIN DE USUARIO</h2>} />
            <Route path='us' element={<h2>SOBRE NOSOTROS</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
