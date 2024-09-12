import { Dispatch, useRef, useState } from "react"
import { Form } from "react-bootstrap"
import { carrilesType } from "./Carril"
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

interface props {
    nroEquipo: number | null
    carrilStatus: carrilesType
    setNroEquipo: Dispatch<number | null>
    setCarrilStatus: Dispatch<carrilesType>
    closeDialog: VoidFunction
    carrilNumber: number
}

function StatusModal({ closeDialog, carrilStatus, setCarrilStatus, carrilNumber, setNroEquipo, nroEquipo }: props) {

    const [tempStatus, setTempStatus] = useState<carrilesType>(carrilStatus);
    const [tempNroEquipo, setTempNroEquipo] = useState<number | null>(nroEquipo);

    const vacioRef = useRef(null)
    const inProcessRef = useRef(null)
    const completeRef = useRef(null)

    const onTempChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newStatus = event.target.value as carrilesType
        setTempStatus(newStatus)
        if (newStatus === "Vacío") {
            setTempNroEquipo(null)
        }
    }


    const saveChanges = async () => {
        const carrilRef = doc(db, "carriles", `${carrilNumber}`);
        await setDoc(carrilRef, {
            status: tempStatus,
            nroEquipo: tempNroEquipo,
        });


        setCarrilStatus(tempStatus)
        setNroEquipo(tempNroEquipo)
        closeDialog()
    }

    const isSaveButtonDisabled = () => {
        return (tempStatus === "En proceso" || tempStatus === "Lista") && !tempNroEquipo;
    };


    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <span className="">Estado del carril/carga</span>
                <button onClick={closeDialog} type="button" className="btn-close"></button>
            </div>
            <hr className="border-dark my-2" />
            <Form >
                <div className="mb-3">
                    <Form.Check
                        ref={vacioRef}
                        inline
                        label="Vacío"
                        //name={` ${carrilNumber}`}
                        type="radio"
                        id={`Vacío ${carrilNumber}`}
                        value="Vacío"
                        checked={tempStatus === "Vacío"}
                        onChange={onTempChangeHandler}
                    />

                    <Form.Check
                        ref={inProcessRef}
                        inline
                        label="En proceso"
                        //name={`${carrilNumber}`}
                        type="radio"
                        id={`En proceso ${carrilNumber}`}
                        value="En proceso"
                        checked={tempStatus === "En proceso"}
                        onChange={onTempChangeHandler}
                    />
                    <Form.Check
                        ref={completeRef}
                        inline
                        label="Lista"
                        //name={`${carrilNumber}`}
                        type="radio"
                        id={`Lista ${carrilNumber}`}
                        value="Lista"
                        checked={tempStatus === "Lista"}
                        onChange={onTempChangeHandler}
                    />
                </div>
            </Form>

            <div >
                <span className="">Equipo</span>
                <hr className="border-dark my-2" />
                <Form.Control
                    type="number"
                    placeholder="Num Equipo"
                    disabled={tempStatus === "Vacío"}
                    value={tempNroEquipo !== null ? tempNroEquipo : ""}
                    onChange={(event) => {
                        const value = event.target.value;
                        setTempNroEquipo(value === "" ? null : Number(value));
                    }}
                />
                <hr className="border-dark my-2" />
                <button className="btn btn-primary" onClick={saveChanges} disabled={isSaveButtonDisabled()}>Guardiar cambios</button>
            </div>



        </>

    )
}
export default StatusModal