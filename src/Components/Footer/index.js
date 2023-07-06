import { Box, Container } from "@mui/material";
import './styles.scss';

import fbIcon from './img/fb-icon.png'
import instagramIcon from './img/instagram-icon.png'
import twitterIcon from './img/twitter-icon.png'

export default function Footer() { 
    return (
        <div className="footer">
            <Container>
                <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row' } }>
                    <div className="bs-footer">
                        <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                            <h1>704 Bike Store</h1>
                        </Box>
                        <p><b>Siga nas redes sociais</b></p>
                        <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center'  }}>
                            <img className="sm-icons" src={fbIcon} alt=""/>
                            <img className="sm-icons" src={instagramIcon} alt=""/>
                            <img className="sm-icons" src={twitterIcon} alt=""/>
                        </Box>
                    </div>

                    <div>
                        <h3>704 Bike Store</h3>
                        <p>Modelos</p>
                        <p>Store</p>
                        <p>Concessionárias</p>
                    </div>

                    <div>
                        <h3>Serviços</h3>
                        <p>Serviços financeiros</p>
                        <p>Pós-venda</p>
                        <p>Recall</p>
                        <p>Contato</p>
                    </div>

                    <div className="contact-footer">
                        <h3>Contato</h3>
                        <p>Av. Filomeno Gomes, 821 - Jacarecanga, Fortaleza - CE, 60010-281</p>
                        <p>(85) 98218-3402</p>
                    </div>
                </Box>

                <hr className="line-footer"/>

                <Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', py: 3 }}>
                    704 Bike Store @ 2023
                </Box>
            </Container>
        </div>
    )
  }