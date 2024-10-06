import DeleteVin from "./DeleteVin"
import { detailLaneType } from "../../../interfaces/detailLane.interface";
import CheckBtn from "./CheckBtn";


interface props {
    detailsLane: detailLaneType
    setDetailLane: (data: detailLaneType) => void;
    carrilNumber: number
    vinId: string
}


function DeleteAndCheckBtn({ detailsLane, setDetailLane, carrilNumber, vinId }: props) {

    return (
        <div className="d-flex flex-column align-items-center gap-3 mt-3 col-2">
            <CheckBtn carrilNumber={carrilNumber} vinId={vinId} detailsLane={detailsLane} />
            <DeleteVin detailsLane={detailsLane} setDetailLane={setDetailLane} carrilNumber={carrilNumber} vinId={vinId}/>
        </div>
    )
}
export default DeleteAndCheckBtn