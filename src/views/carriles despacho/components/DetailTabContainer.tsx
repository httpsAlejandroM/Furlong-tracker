import { detailLaneType } from "../../../interfaces/detailLane.interface"
import DetailTabResult from "./DetailTabResult"

interface props {
    detailsLane: detailLaneType
}

function DetailTabContainer({ detailsLane }: props) {

    return (
        <div className="">
            {
                detailsLane.map((vehiculoData) => {
                    return (
                        <DetailTabResult
                            key={vehiculoData.vinId}
                            model={vehiculoData.model}
                            fila={vehiculoData.fila}
                            pre={vehiculoData.pre}
                            ubi={vehiculoData.ubi}
                            vinId={vehiculoData.vinId}
                        />
                    )
                })
            }
        </div>
    )
}
export default DetailTabContainer