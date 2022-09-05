import './App.css';
import ItemList from './components/ItemList/ItemList';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <>
      <Navbar />
      <ItemList saludo='Este es el listado de items de mi catálogo'/> 
    </>
  )
}

export default App;
