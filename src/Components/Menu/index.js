import {Link} from "react-router-dom";

import { Box, Button, Container, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import logo from './img/bike-store.png'

import './styles.scss';


export default function Menu() { 
    return (
      <div className="menu">
          <Container fixed>
            <Box sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' } }>
              <div className="menu-logo">
                <div className="menu-img">
                  <img src={logo} alt=""/>
                </div>
                <Link to='/'><h1>704 Bike Store</h1></Link>
              </div>

              <div className="menu-input">
                <TextField id="outlined-basic" label="Pesquisar moto" variant="outlined" size="small" />
                <div className="input-glass">
                  <span><SearchIcon/></span>
                </div>
              </div>

              <Link to='/login'><Button variant="contained">Entrar</Button></Link>
            </Box>
          </Container>
      </div>
    )
  }