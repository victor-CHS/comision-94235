import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <div className='container'>
    <ItemListContainer text={'TODA TU MUSICA FAVORITA EN UN SOLO SITIO '}/>
    </div>
    </>
  )
}

export default App
