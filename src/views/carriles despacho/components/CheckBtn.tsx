import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../../firebase";
import { detailLaneType } from "../../../interfaces/detailLane.interface";
import { findVehicle, updateCheck } from "../../../utils/detailLaneArray";

interface props {
    detailsLane: detailLaneType
    carrilNumber: number
    vinId: string
}


function CheckBtn({ carrilNumber, vinId, detailsLane }: props) {

    const [isChecked, setIsChecked] = useState<boolean>(false)


    const checkHandler = async () => {
        setIsChecked(!isChecked);
       const updatedCheck = updateCheck(detailsLane, vinId)
        try {
                const carrilRef = doc(db, "carriles", `${carrilNumber}`);
                await setDoc(carrilRef, {
                    detailLane: updatedCheck
                }, { merge: true })
            
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        const carrilRef = doc(db, "carriles", `${carrilNumber}`);
        const unsubscribe = onSnapshot(carrilRef, (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                const veihicleFound = findVehicle(data.detailLane, vinId)
                if (veihicleFound){
                    const checked = veihicleFound
                    setIsChecked(checked)
                }
            }
        });
        return () => unsubscribe();
    }, [carrilNumber, detailsLane, vinId])


    return (
        <div>
            <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off" />
            <label
                onClick={() => checkHandler()} 
                className={isChecked ? "btn btn-sm btn-success" : "btn btn-sm btn-warning"}
                htmlFor="btn-check">{
                    isChecked
                        ? <i className="bi bi-check-lg"></i>
                        : <i className="bi bi-clock"></i>}
            </label>
        </div>
    )
}
export default CheckBtn