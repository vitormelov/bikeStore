import { Box, Button } from "@mui/material";

import spotlightBike from "./img/spotilght-bike.png"

import "./styles.scss"

export default function Spotlight() {
    return (
        <div className="spotlight">
            <Box sx={{ justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                <div className="spotlightImg">
                    <img src={spotlightBike} alt=""></img>
                </div>
                
                <div className="spotlightText">
                    <h2>704 Bike Store</h2>
                    <p><span>Nossa loja tem mais de 40 anos de história e tradição. Venha até a loja mais próxima de você para fazer um test drive e adquirir a moto do seus sonhos.</span></p>
                    <Button variant="contained">Saiba mais</Button>
                </div>
            </Box>
        </div>
    )
}