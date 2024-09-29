import { useRef, useState, useEffect  } from "react"
import StatusModal from "./StatusModal";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

interface carrilInterface {
    carrilNumber: number
}

export type carrilesType = "Vacío" | "En proceso" | "Lista"

function Carril({ carrilNumber }: carrilInterface) {
    const [carrilStatus, setCarrilStatus] = useState<carrilesType>("Vacío")
    const [nroEquipo, setNroEquipo] = useState<number | null>(null)
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const bgCarril = {
        "Vacío": "btn-secondary border-secondary", //btn-secondary
        "En proceso": "btn-warning border-warning",
        "Lista": "btn-success border-success"
    }

    useEffect(()=>{
        const carrilRef = doc(db, "carriles", `${carrilNumber}`);

        const unsubscribe = onSnapshot(carrilRef, (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                setCarrilStatus(data.status);
                setNroEquipo(data.nroEquipo);
            }
        });


        return () => unsubscribe();
    },[carrilNumber])

    return (
        <article key={carrilNumber} className="postion-relative text-light container-fluid d-flex justify-content-start input-group mb-2">
            <span className="input-group-text d-flex justify-content-center fs-5" style={{ width: "43px" }}>{carrilNumber}</span>
            <button
                type="button"
                onClick={openDialog}
                className={`btn ${bgCarril[carrilStatus]} fs-5 fw-semibold d-flex justify-content-center ${carrilStatus == "Vacío" ? "rounded-2 rounded-start-0" : ""}`}
                style={{ width: "150px", letterSpacing: "0.6px" }}>
                {carrilStatus}
            </button>
            {
                carrilStatus != "Vacío" &&
                <span className="input-group-text d-flex justify-content-center fs-5 rounded-2 rounded-start-0"
                    style={{ width: "70px" }}>{nroEquipo}</span>
            }
            <dialog style={{top:"19%"}} className="position-fixed mx-auto border-0 rounded-3 col-12 col-lg-6 offset-lg-3 m-0" ref={dialogRef}>
                <StatusModal 
                closeDialog={closeDialog} 
                carrilStatus={carrilStatus} 
                setCarrilStatus={setCarrilStatus} 
                setNroEquipo={setNroEquipo}
                nroEquipo={nroEquipo}
                carrilNumber={carrilNumber}
                >
                </StatusModal>
            </dialog>

        </article>
    )
}
export default Carril