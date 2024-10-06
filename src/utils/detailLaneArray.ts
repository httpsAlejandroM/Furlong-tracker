import { detailLaneType } from "../interfaces/detailLane.interface"
import { vehiculoInterfaces } from "../interfaces/vehiculo.interface"

const pushVin = (detailLane: detailLaneType, data: vehiculoInterfaces) => {
    const alreadyExistVin = detailLane.find((dataVin) => dataVin.vinId === data.vinId)
    if (alreadyExistVin) {
        return detailLane
    } else {
        detailLane.push({ ...data, check: false })
        return detailLane
    }

}

const deleteVin = (detailLane: detailLaneType, vinId: string) => {
    const filteredVin = detailLane.filter((vehicle) => vehicle.vinId !== vinId)
    return filteredVin
}

const updateCheck = (detailLane: detailLaneType, vinId: string) => {
    const updatedCheck = detailLane.map((vehicle) => {
        if(vehicle.vinId === vinId) {
            return {...vehicle, check: !vehicle.check}
        }
        return vehicle
    })
    return updatedCheck
}

const findVehicle = (detailLane: detailLaneType, vinId: string) :boolean => {
    const vehicleByVin = detailLane.find((element)=> element.vinId === vinId )
    if(vehicleByVin?.check !== undefined){
        return vehicleByVin.check
    }
    return false
}

export {
    pushVin,
    deleteVin,
    updateCheck,
    findVehicle
}