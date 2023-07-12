import * as React from 'react';
import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import "./styles.scss"

export default function LoginCard() { 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    return (
        <div className="login">
            <Container>
                <div className="login-card">
                    <h1>704 Bike Store</h1>
                    <h2>Login</h2>
                    <input type="email" placeholder="Email"></input>
                    <br/>
                    <input maxLength={8} type="password" placeholder="Senha"></input>
                    <br/>
                    <Link to="/"><Button variant="contained">Entrar</Button></Link>

                    <div className='adm'>
                        <Link onClick={handleOpen}>Área do administrador</Link>
                    </div>
                    
                </div>
            </Container>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Administração
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <input maxLength={8} type='password' placeholder='senha'></input>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Link to="/admin"><Button variant='contained'>Entrar</Button></Link>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}