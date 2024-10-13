import axios from "axios";
import { useRef } from "react";
import { ApiUrl } from "../../utils/apiUrl";


function HiddenButton() {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
        return
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (file) {
                await uploadDB(file)
            }
        }
    };

    const uploadDB = async (file: File) => {
        const formData = new FormData()
        formData.append("file", file)
        try {
            const { data } = await axios.put(`${ApiUrl}/inventario`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (data) {
                console.log(data.message);
            }
            return
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="position-absolute end-0 d-flex align-items-center">
            <button
                className="btn btn-lg btn-dark position-absolute end-0"
                onClick={handleClick}>
            </button>
            <input
                type="file"
                accept=".txt"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="d-none"
            />
        </div>
    )
}
export default HiddenButton