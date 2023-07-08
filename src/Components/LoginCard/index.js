import { Button, Container } from "@mui/material";

import "./styles.scss"

export default function LoginCard() { 
    return (
        <div className="login">
            <Container>
                <div className="login-card">
                    <h1>704 Bike Store</h1>
                    <h2>Login</h2>
                    <input type="email" placeholder="Email"></input>
                    <br/>
                    <input type="password" placeholder="Senha"></input>
                    <br/>
                    <Button variant="contained">Entrar</Button>
                </div>
            </Container>
        </div>
    )
}