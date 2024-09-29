import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import DespachoList from './views/carriles despacho/DespachoList';
import Navbar from "../src/components/header/Navbar"
import Searcher from './views/searcher/Searcher';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<DespachoList/>}/>
        <Route path="/searcher" element={<Searcher/>}/>
      </Routes>
    </>
  )
}

export default App
