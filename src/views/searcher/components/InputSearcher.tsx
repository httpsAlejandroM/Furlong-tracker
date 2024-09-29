import { useState } from "react"
import { Button, Form, Spinner } from "react-bootstrap"
import { vehiculoInterfaces } from "../../../interfaces/vehiculo.interface";
import { ApiUrl } from "../../../utils/apiUrl";
import axios from "axios";

interface props {
  setVehiculoByVin: (data: vehiculoInterfaces) => void;
}

function VinSearcher({ setVehiculoByVin }: props) {

  const [searchValue, setSearchValue] = useState("")
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  const serachValueHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setSearchValue(value.toUpperCase())
  }

  const getByVin = async () => {
    setIsLoading(true)
    try {
      const data = (await axios.get(`${ApiUrl}/inventario/${searchValue}`)).data
      setVehiculoByVin(data)
      setSearchValue("")
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()  
    getByVin()  
  }

  return (
    <Form className="d-flex mt-4" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="VIN"
        className="me-2"
        aria-label="Search"
        value={searchValue}
        onChange={(event) => serachValueHandler(event)}
      />
      <Button
        type="submit"
        onClick={() => getByVin()}
        variant="btn btn-primary">
        {isLoading? <Spinner animation="border" variant="light" size="sm"/> : <i className="bi bi-search"></i>}
      </Button>
    </Form>
  )
}
export default VinSearcher