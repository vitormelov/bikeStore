import {Link, useLocation} from "react-router-dom";

import './styles.scss';
import { Box, Container } from "@mui/material";

export default function Navbar() {
    const url = useLocation();

    const isActive = (path) => {
        return (path === url.pathname) ? "active" : "";
    }

    return (
        <nav className="navbar">
            <Container fixed>
                <Box sx={{ justifyContent: 'flex-start', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
                    <Link className={isActive('/')} to="/">Home</Link>
                    <Link className={isActive('/meus-pedidos')} to="/meus-pedidos">Meus Pedidos</Link>
                </Box>
            </Container>
        </nav>
    )
}   