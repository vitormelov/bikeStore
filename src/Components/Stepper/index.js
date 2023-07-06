import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Box, Container, Paper } from '@mui/material'

import './styles.scss'

export default function Stepper(props)
{
    var items = [
        {
            information1: "Melhores ofertas",
            information2: "CB 300F Twister",
            information3: "A partir de R$ 21.990,00",
            image: "https://www.honda.com.br/motos/sites/hda/files/2022-12/lateral-direita-moto-honda-cb-300f-twister-modelo-abs-cor-dourada.webp"
        },
        {
            information1: "Melhores ofertas",
            information2: "CRF 1100L Africa Twin Adventure Sports",
            information3: "A partir de R$ 109.130,00",
            image: "https://www.honda.com.br/motos/sites/hda/files/2023-01/1920x980-imagem-desktop-moto-honda-crf-1100l-africa-twin-adventure-sports-dct-2023-v1.webp"
        },
        {
            information1: "Melhores ofertas",
            information2: "CBR 1000RR-R FIREBLADE SP",
            information3: "A partir de R$ 198.500,00",
            image: "https://www.honda.com.br/motos/sites/hda/files/2023-01/desktop-moto-honda-cbr1000rr-r-firebladesp-2023-branco-perolizado-15.webp"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div className='stepper'>
            <Paper>
                <Container>
                    <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                        <div className='stepperInfo'>
                            <p>{props.item.information1}</p>
                            <h1>{props.item.information2}</h1>
                            <p><span>{props.item.information3}</span></p>
                            <Button variant="contained">Ver ofertas</Button>
                        </div>
                        <div className='stepperImg'>
                            <div className='stepperShoes'>
                                <img src={props.item.image} alt=''/>
                            </div>
                        </div>
                    </Box>
                </Container>
            </Paper>
        </div>
    )
}