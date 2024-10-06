
interface props {
    vinId: string
    model: string
    pre: string
    ubi: number
    fila: number
}

function DetailTabResult({ vinId, model, pre, ubi, fila }: props) {
    return (
        <div className="row mt-3 d-flex justify-content-center col-10">
            <div className="col-12 ms-1 border border-2 p-1 m-0">
                <p className="p-0 m-0 text-center">{vinId}</p>
            </div>
            <div className="col-12 ms-1 border border-top-0 border-2 p-1 m-0">
                <small className="col p-0 m-0 d-flex justify-content-center">
                    {model}</small>
            </div>
            <div className="col-12 ms-1 d-flex justify-content-around p-0 border-start-1 border-end-1 border border-top-0 border-bottom-0">
                <div className="col-4 d-flex flex-column align-items-center p-1 border border-1 border-top-0">
                    <p className="p-0 m-0">Bloque</p>
                    <p className="p-0 m-0">{pre}</p>
                </div>
                <div className="col-4 d-flex flex-column align-items-center p-1 border border-1 border-top-0 ">
                    <p className="p-0 m-0">Ubi</p>
                    <p className="p-0 m-0">{ubi}</p>
                </div>
                <div className="col-4 d-flex flex-column align-items-center p-1 border border-1 border-top-0">
                    <p className="p-0 m-0">Fila</p>
                    <p className="p-0 m-0">{fila}</p>
                </div>
            </div>
        </div>
    )
}
export default DetailTabResult