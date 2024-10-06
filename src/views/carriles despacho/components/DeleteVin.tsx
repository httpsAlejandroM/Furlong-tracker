import { doc, setDoc } from "firebase/firestore";
import { detailLaneType } from "../../../interfaces/detailLane.interface";
import { deleteVin } from "../../../utils/detailLaneArray";
import { db } from "../../../firebase";
import { vehiculoInterfaces } from "../../../interfaces/vehiculo.interface";

interface props {
    detailsLane: detailLaneType
    setDetailLane: (data: detailLaneType) => void;
    carrilNumber: number
    vinId: string
}

function DeleteVin({ detailsLane, setDetailLane, carrilNumber, vinId }: props) {

    const deleteVinHandler = () => {
        const deletedVinId = deleteVin(detailsLane, vinId)
        setDetailLane([...deletedVinId])
        saveChangeInFirebase(deletedVinId)
    }

    const saveChangeInFirebase = async (deletedVinId: vehiculoInterfaces[]) => {
        try {
            const carrilRef = doc(db, "carriles", `${carrilNumber}`)
            await setDoc(carrilRef, {
                detailLane: deletedVinId
            }, { merge: true })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button 
        onClick={()=>deleteVinHandler()}
        className="btn btn-sm btn-danger"><i className="bi bi-trash"></i></button>
    )
}
export default DeleteVin