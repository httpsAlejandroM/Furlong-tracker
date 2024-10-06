import { detailLaneType } from "../../../interfaces/detailLane.interface"
import DeleteAndCheckBtn from "./DeleteAndCheckBtn"
import DetailTabResult from "./DetailTabResult"

interface props {
    detailsLane: detailLaneType
    setDetailLane: (data: detailLaneType) => void;
    carrilNumber: number
}

function DetailTabContainer({ detailsLane, setDetailLane, carrilNumber }: props) {

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            {
                detailsLane.map((vehiculoData) => {
                    return (
                        <div 
                        key={vehiculoData.vinId}
                        className="row col-12 justify-content-center gap-3 align-items-center"
                        >
                            <DetailTabResult
                                model={vehiculoData.model}
                                fila={vehiculoData.fila}
                                pre={vehiculoData.pre}
                                ubi={vehiculoData.ubi}
                                vinId={vehiculoData.vinId}
                            />
                            <DeleteAndCheckBtn
                            detailsLane={detailsLane} 
                            setDetailLane={setDetailLane} 
                            carrilNumber={carrilNumber}
                            vinId={vehiculoData.vinId}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}
export default DetailTabContainer