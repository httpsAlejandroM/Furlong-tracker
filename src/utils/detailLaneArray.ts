import { detailLaneType } from "../interfaces/detailLane.interface"
import { vehiculoInterfaces } from "../interfaces/vehiculo.interface"

const pushVin = (detailLane: detailLaneType, data: vehiculoInterfaces) => {
    const alreadyExistVin = detailLane.find((dataVin) => dataVin.vinId === data.vinId)
    if (alreadyExistVin) {
        return detailLane
    } else {
        detailLane.push(data)
        return detailLane
    }

}

export {
    pushVin
}