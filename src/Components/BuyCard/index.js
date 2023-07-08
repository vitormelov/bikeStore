import { Button, Container } from "@mui/material";
import React from "react";

import "./styles.scss"

export default function BuyCard() { 

    const [cep, setCep] = React.useState('');
    const [logradouro, setLogradouro] = React.useState('');
    const [cidade, setCidade] = React.useState('');
    const logradouroInput = React.createRef();
    const numeroInput = React.createRef();

    const alterarCep = (event) => {
        if (event.target.value.length === 8) {

        fetch(`https://viacep.com.br/ws/${event.target.value}/json`)
            .then(res => res.json())
            .then(endereco => {
            if (endereco.erro === true) {
                logradouroInput.current.focus();
                alert('CEP invalido');
                return;
            }

            setLogradouro(endereco.logradouro);
            setCidade(endereco.localidade);
            numeroInput.current.focus();
            });
        }
    };

    return (
        <div className="buy-page">
            <Container>
                <div className="buy-card">
                    <form>
                        <h2>Dados do veículo</h2>


                        <h2>Dados pessoais</h2>

                        <div>
                            <label htmlFor="name">Nome completo</label> <br/>
                            <input id="name" placeholder="Paulo Sérgio"/>
                        </div>
                        

                        <div>
                            <label htmlFor="telephone">Telefone</label> <br/>
                            <input id="telephone" placeholder="(xx) x xxxx-xxxx"/>
                        </div>

                        <div>
                            <label htmlFor="email">Telefone</label> <br/>
                            <input id="email" placeholder="paulo@email.com"/>
                        </div>

                        <div>
                            <label htmlFor="cpf">CPF</label> <br/>
                            <input id="cpf" placeholder="xxx.xxx.xxx-xx"/>
                        </div>
                        

                        <h2>Dados de localização</h2>
                        
                        <input onChange={alterarCep} placeholder="CEP"/>
                        <input value={logradouro} ref={logradouroInput} placeholder="Logradouro"/>
                        <input value={cidade} placeholder="Cidade"/>
                        <input ref={numeroInput} placeholder="Número"/>

                        <h2>Forma de pagamento</h2>

                        <div>
                            <label htmlFor="titName">Nome do titular</label> <br/>
                            <input id="titName" placeholder="Paulo Sérgio"/>
                        </div>
                        

                        <div>
                            <label htmlFor="number">Número do cartão</label> <br/>
                            <input id="number" placeholder="xxxx xxxx xxxx xxxx"/>
                        </div>

                        <div>
                            <label htmlFor="cpf">CPF do titular</label> <br/>
                            <input id="cpf" placeholder="xxx.xxx.xxx-xx"/>
                        </div>

                        <div>
                            <label htmlFor="expiration">Validade</label> <br/>
                            <input id="expiration" placeholder="xx/xx"/>
                        </div>

                        <div>
                            <label htmlFor="code">Código de segurança</label> <br/>
                            <input id="code" placeholder="xxx"/>
                        </div>

                        <Button variant="contained">FINALIZAR COMPRA</Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}