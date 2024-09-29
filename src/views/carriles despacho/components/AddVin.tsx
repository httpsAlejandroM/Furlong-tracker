import axios from "axios"
import { useState } from "react"
import { Button, Form, Spinner } from "react-bootstrap"
import { ApiUrl } from "../../../utils/apiUrl"
import { detailLaneType } from "../../../interfaces/detailLane.interface";
import { pushVin } from "../../../utils/detailLaneArray";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

interface props {
    detailLane: detailLaneType
    setDetailLane: (data: detailLaneType) => void;
    carrilNumber: number
}


function AddVin({ setDetailLane, detailLane, carrilNumber }: props) {

    const [addInputValue, setAddInputValue] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onChangeAddValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value;
        setAddInputValue(value.toUpperCase())
    }

    const addVINHandler = async () => {
        setIsLoading(true)
        try {
            const data = (await axios.get(`${ApiUrl}/inventario/${addInputValue}`)).data
            const addedVin = pushVin(detailLane, data)
            setDetailLane([...addedVin])
            setAddInputValue("")
            saveDetails()
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const saveDetails = async () => {
        try {
            const carrilRef = doc(db, "carriles", `${carrilNumber}`)
            await setDoc(carrilRef, {
                detailLane: detailLane
            }, { merge: true })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addVINHandler()
    }

    return (
        <Form className="d-flex justify-content-between align-items-center mt-4 mb-2 col-12" onSubmit={handleSubmit} >
            <Form.Control
                type="search"
                placeholder="VIN"
                className="col me-2"
                aria-label="Search"
                value={addInputValue}
                onChange={(event) => onChangeAddValue(event)}
            />
            <Button
                type="submit"
                className="tex-wrap col-3"
                variant="btn btn-primary px-0"
                disabled={addInputValue === ""}
            >
                {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : "Agregar"}
            </Button>
        </Form>
    )
}
export default AddVin