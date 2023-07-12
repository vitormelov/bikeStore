import { Container } from "@mui/material"
import maintenance from "./img/maintenance.svg"

import "./styles.scss"

export default function Maintenance() {
    return (
        <div className="maintenance">
            <Container>
                <h1>PÁGINA EM MANUTENÇÃO</h1>
                
                <div className="maintenanceImg">
                    <img src={maintenance} alt=""/>
                </div>
            </Container>
        </div>
    )
}