import { Dispatch, useState } from "react"
import { carrilesType } from "./Carril"
import StatusTab from "./StatusTab";
import DetailTab from "./DetailTab";

interface props {
    nroEquipo: number | null
    carrilStatus: carrilesType
    setNroEquipo: Dispatch<number | null>
    setCarrilStatus: Dispatch<carrilesType>
    closeDialog: VoidFunction
    carrilNumber: number
}

type tabsType = "statusTab" | "detailTab"

function StatusModal({ closeDialog, carrilStatus, setCarrilStatus, carrilNumber, setNroEquipo, nroEquipo }: props) {

    const [ currentTab, setCurrentTab ] = useState<tabsType>("statusTab")
    
    const tab = {
        "statusTab": <StatusTab 
        carrilNumber={carrilNumber}
        carrilStatus={carrilStatus}
        nroEquipo={nroEquipo}
        setCarrilStatus={setCarrilStatus}
        setNroEquipo={setNroEquipo}
        closeDialog={closeDialog}
        />,
        "detailTab": <DetailTab carrilNumber={carrilNumber}/>
    }
    
    const activeTab = "bg-primary text-light border border-2 border-secondary border-bottom-0 rounded-top"

    return (
        <div className="d-flex flex-column">
    
            <div className="d-flex flex-row justify-content-between ">
                <div className="border-bottom py-1 border-secondary-subtle border-2 col">
                <span 
                
                className={`${currentTab === "statusTab"? activeTab : "" } p-2`} 
                onClick={()=>setCurrentTab("statusTab")}
                >Estado del carril</span>
                <span 
                
                className={`${currentTab === "detailTab"? activeTab : ""} p-2`} 
                onClick={()=>setCurrentTab("detailTab")}>Destalles de carga</span>
                </div>
                
                <div>
                <button onClick={closeDialog} type="button" className="btn-close align-self-end p-0"></button>
                </div>
            
            </div>
            {
                
                    tab[currentTab]
            }
        </div>
    )
}
export default StatusModal