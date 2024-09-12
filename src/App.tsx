import 'bootstrap/dist/css/bootstrap.min.css';
import Carril from './components/Carril';

function App() {

  const carriles = Array.from({length: 22}, (_, index)=> index + 1);

  return (
    <main className='container-fluid'>
      <h1 className='text-white display-3 m-2 mb-3'>Lista de Cargas</h1>
      {
        carriles.map((carril)=>{
          return (
            <Carril key={carril} carrilNumber={carril}></Carril>
          )
        })
      }
    </main>
  )
}

export default App
