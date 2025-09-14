import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarContainer from './components/navbarContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProductDetailContainer from './components/ProductDetailContainer'

function App() {
  return (
   
  <BrowserRouter>
    <NavbarContainer/>
    <Routes>
      <Route path="/" element={<ItemListContainer text={'TODOS TUS ARTICULOS FAVORITOS EN UN SOLO SITIO'}/>}/>
      <Route path="/category/:id" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ProductDetailContainer/>}/>
    </Routes>
  </BrowserRouter>

 )
}

export default App
