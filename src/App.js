import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <>
      <Navbar />
      <ItemListContainer saludo='Este es el listado de items de mi catálogo'/> 
    </>
  )
}

export default App;
