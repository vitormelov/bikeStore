import React from "react";
import { Box, Button, Container } from "@mui/material";
import "./styles.scss"
import { Link } from "react-router-dom";

export default function Bikes() {
    const [items, setItems] = React.useState([]); 

    React.useEffect(() => {    
        fetch('http://localhost:8000/bikes')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const Card = (props) => {
        const moveTo = () => {
            window.location.href = `/produto/${props.id}`;
          };

        return (
            <Box>
                <div className="card">
                    <div className="cardName">
                        <h4>{props.name}</h4>
                    </div>
                    
                    <div className="cardImg">
                        <img src={props.image} alt=''></img>
                    </div>
                    
                    <div className="cardPrice">
                        <p><b>A partir de</b></p>
                        <h4><b><small>R$</small> {props.price}</b></h4>
                        <p><b>CV: {props.cv}</b></p>
                    </div>

                    <div className="cardButton">
                        <Link onClick={moveTo}><Button variant="contained">Tenho interesse</Button></Link>
                    </div>
                </div>
            </Box>
        )
    }

    return (
        <div className="bikes">
            <Container fixed>
                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' } }>
                    {items.map(cada => (
                        <Card name={cada.name} image={cada.image} price={cada.price} cv={cada.cv} id={cada.id}/>
                    ))}
                </Box>
            </Container>
        </div>
    )
}