import { useEffect, useState } from "react"
import AddVin from "./AddVin"
import { detailLaneType } from "../../../interfaces/detailLane.interface"
import DetailTabContainer from "./DetailTabContainer"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase"

interface props {
  carrilNumber: number
}


function DetailTab({ carrilNumber }: props) {
  const [detailLane, setDetailLane] = useState<detailLaneType>([])

  useEffect(() => {
    const carrilRef = doc(db, "carriles", `${carrilNumber}`);
    const unsubscribe = onSnapshot(carrilRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        if(Array.isArray(data.detailLane) && data.detailLane.length >= 1){
          setDetailLane(data.detailLane)
        }
      }
    })

    return () => unsubscribe()
  }, [carrilNumber])

  return (
    <div className="px-2 overflow-y-auto overflow-x-hidden" style={{ maxHeight: "400px" }}>
      {
        detailLane.length === 0
          ? <p className="text-center p-0 mt-3">No hay detalles de la carga</p>
          : <DetailTabContainer detailsLane={detailLane} />
      }
      <AddVin detailLane={detailLane} setDetailLane={setDetailLane} carrilNumber={carrilNumber} />
    </div>
  )
}
export default DetailTab