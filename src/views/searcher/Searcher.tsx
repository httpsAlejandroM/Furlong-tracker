import { vehiculoInterfaces } from "../../interfaces/vehiculo.interface";
import InputSearcher from "./components/InputSearcher"
import SearchResult from "./components/SearchResult"
import { useState } from "react";

function Searcher() {

  const [ vehiculoByVin, setVehiculoByVin ] = useState<vehiculoInterfaces | null >(null)

  return (
    <section className="container-fluid mt-4 min-vh-100">
      <div className="bg-light rounded-1 p-3 pb-2 col-12 col-lg-6 offset-lg-3">
        <h2 className="text-dark fs-5">Buscar VIN</h2>
        <InputSearcher setVehiculoByVin={setVehiculoByVin}/>
        {
         vehiculoByVin?.vinId 
         ? <SearchResult vehiculoByVin={vehiculoByVin}/>
         : <p className="p-4 pb-0 text-center">{vehiculoByVin?.message}</p>
        }
      </div>
    </section>
  )
}
export default Searcher