import { Dispatch, useState } from "react";
import { Form } from "react-bootstrap";
import { carrilesType } from "./Carril";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

interface props {
    carrilNumber: number
    nroEquipo: number | null
    carrilStatus: carrilesType
    setCarrilStatus: Dispatch<carrilesType>
    setNroEquipo: Dispatch<number | null>
    closeDialog: VoidFunction
}

function StatusTab({ carrilNumber, carrilStatus, nroEquipo, setCarrilStatus, setNroEquipo, closeDialog}: props) {

    const [tempStatus, setTempStatus] = useState<carrilesType>(carrilStatus);
    const [tempNroEquipo, setTempNroEquipo] = useState<number | null>(nroEquipo);

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

    const isSaveButtonDisabled = () =>  (tempStatus === "En proceso" || tempStatus === "Lista") && !tempNroEquipo;

    return (
        <>
            <Form >
                <div className="mb-3">
                    <Form.Check
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
            </div>
            <button className="btn btn-primary" onClick={saveChanges} disabled={isSaveButtonDisabled()}>Guardiar cambios</button>

        </>
    )
}
export default StatusTab