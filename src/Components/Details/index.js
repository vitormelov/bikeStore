import { Box, Button, Container } from "@mui/material";
import React from "react";

import "./styles.scss"

export default function Details( { id }) {
    const [item, setItem] = React.useState([]); 

    React.useEffect(() => {    
        fetch(`http://localhost:8000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);

    return (
        <div className="details">
            <Container>
                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' } }>
                    <div className="details-img">
                        <img src={item.image2} alt="Imagem da moto" />
                    </div>

                    <div className="details-prop">
                        <h1>{item.name}</h1>
                        <h2>R$ {item.price}</h2>
                        <p><b>Tipo:</b> {item.type}</p>
                        <p><b>Cilindrada:</b> {item.cv}</p>
                        <p><b>Potência Máximo:</b> {item.maxPower}</p>
                        <p><b>Torque Máximo:</b> {item.maxTorque}</p>
                        <p><b>Transmissão:</b> {item.transmission}</p>
                        <p><b>Sistema de partida:</b> {item.startSystem}</p>
                        <p><b>Diâmetro x Curso:</b> {item.diameterXStroke}</p>
                        <p><b>Relação de Compressão:</b> {item.ratio}</p>
                        <p><b>Sistema alimentação:</b> {item.powerSystem}</p>
                        <p><b>Combustível:</b> {item.fuel}</p>

                        <div className="buy-button">
                            <Button variant="contained">COMPRAR</Button>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
      );
}