import { vehiculoInterfaces } from "../../../interfaces/vehiculo.interface"

interface props {
    vehiculoByVin: vehiculoInterfaces | null
}

function SearchResult({ vehiculoByVin }: props) {
    return (
        <div className="p-3 pb-0">
            <div className="d-flex flex-row justify-content-center">
                <p className="p-0 m-0 text-dark-emphasis fs-6 fw-semibold">
                    {`${vehiculoByVin?.vinId}`}
                </p>
            </div>
            <div className=" d-flex flex-row align-items-center justify-content-center">

                <div className="row ">
                    <div className="col-12 border border-2 p-2 m-0">
                        <small className="col p-0 m-0 d-flex justify-content-center">
                            {vehiculoByVin?.model}</small>
                    </div>
                    <div className="col-12 d-flex justify-content-around p-0 border-start-1 border-end-1 border border-top-0 border-bottom-0">
                        <div className="col-4 d-flex flex-column align-items-center p-2 border border-1 border-top-0">
                            <p className="p-0 m-0">Bloque</p>
                            <p className="p-0 m-1">{vehiculoByVin?.pre}</p>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-center p-2 border border-1 border-top-0 ">
                            <p className="p-0 m-0">Ubicación</p>
                            <p className="p-0 m-1">{vehiculoByVin?.ubi}</p>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-center p-2 border border-1 border-top-0">
                            <p className="p-0 m-0">Fila</p>
                            <p className="p-0 m-1">{vehiculoByVin?.fila}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SearchResult