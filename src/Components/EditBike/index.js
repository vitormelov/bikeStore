import React from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Toaster from "../Toaster";

import './styles.scss'

export default function EditBike() {
    const {id} = useParams();
    
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [image1, setImage] = React.useState('');
    const [image2, setImage2] = React.useState('');
    const [cv, setCv] = React.useState('');
    const [type, setType] = React.useState('');
    const [maxPower, setMaxPower] = React.useState('');
    const [maxTorque, setMaxTorque] = React.useState('');
    const [transmission, setTransmission] = React.useState('');
    const [startSystem, setStartSystem] = React.useState('');
    const [diameterXStroke, setDiameterXStroke] = React.useState('');
    const [ratio, setRatio] = React.useState('');
    const [powerSystem, setPowerSystem] = React.useState('');
    const [fuel, setFuel] = React.useState('');

    const alterarNome = (event) => {
        setName(event.target.value);
    }
    
    const alterarPreco = (event) => {
        setPrice(event.target.value);
    }

    const alterarImagem1 = (event) => {
        setImage(event.target.value);
    }

    const alterarImagem2 = (event) => {
        setImage2(event.target.value);
    }

    const alterarCv = (event) => {
        setCv(event.target.value);
    }

    const alterarTipo = (event) => {
        setType(event.target.value);
    }

    const alterarMaxPoder = (event) => {
        setMaxPower(event.target.value);
    }

    const alterarTorque = (event) => {
        setMaxTorque(event.target.value);
    }

    const alterarTransmissao = (event) => {
        setTransmission(event.target.value);
    }

    const alterarInicio = (event) => {
        setStartSystem(event.target.value);
    }

    const alterarDiametro = (event) => {
        setDiameterXStroke(event.target.value);
    }

    const alterarRatio = (event) => {
        setRatio(event.target.value);
    }

    const alterarSistema = (event) => {
        setPowerSystem(event.target.value);
    }

    const alterarCombustivel = (event) => {
        setFuel(event.target.value);
    }

    React.useEffect(() => {
        fetch('http://localhost:8000/bikes/'+id)
            .then(res => res.json())
            .then(dados => {
                setName(dados.name)
                setPrice(dados.price)
                setImage(dados.image1)
                setImage2(dados.image2)
                setCv(dados.cv)
                setType(dados.type)
                setMaxPower(dados.maxPower)
                setMaxTorque(dados.maxTorque)
                setTransmission(dados.transmission)
                setStartSystem(dados.startSystem)
                setDiameterXStroke(dados.diameterXStroke)
                setRatio(dados.ratio)
                setPowerSystem(dados.powerSystem)
                setFuel(dados.fuel)
            })
    }, [id]);


    const enviar = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/bikes/'+id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                price: price,
                image1: image1,
                image2: image2,
                cv: cv,
                type: type,
                maxPower: maxPower,
                maxTorque: maxTorque,
                transmission: transmission,
                startSystem: startSystem,
                diameterXStroke: diameterXStroke,
                ratio: ratio,
                powerSystem: powerSystem,
                fuel: fuel
            })
        });
    }

    return (
        <div className="edit">
            <Container>
                <h1>Editar véiculo</h1>

                <form onSubmit={enviar}>
                    <div>
                        <label>Nome do véiculo</label> <br/> 
                        <input value={name} onChange={alterarNome} placeholder="Digite aqui"/>
                    </div>
                    
                    <div>
                        <label>Preço</label> <br/>
                        <input value={price} onChange={alterarPreco} placeholder="Digite aqui"/>
                    </div>
                    
                    <div>
                        <label>Imagem da página da home</label> <br/>   
                        <input value={image1} onChange={alterarImagem1} placeholder="Digite aqui"/>
                    </div>
                    
                    <div>
                        <label>Imagem da página de descrição</label> <br/>   
                        <input value={image2} onChange={alterarImagem2} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Cilindradas</label> <br/>   
                        <input value={cv} onChange={alterarCv} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Tipo</label> <br/>   
                        <input value={type} onChange={alterarTipo} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Potência máxima</label> <br/>   
                        <input value={maxPower} onChange={alterarMaxPoder} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Torque máximo</label> <br/>   
                        <input value={maxTorque} onChange={alterarTorque} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Transmissão</label> <br/>   
                        <input value={transmission} onChange={alterarTransmissao} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Sistema de partida</label> <br/>   
                        <input value={startSystem} onChange={alterarInicio} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Diâmetro x Curso</label> <br/>   
                        <input value={diameterXStroke} onChange={alterarDiametro} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Relação de compressão</label> <br/>   
                        <input value={ratio} onChange={alterarRatio} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Sistema alimentação</label> <br/>   
                        <input value={powerSystem} onChange={alterarSistema} placeholder="Digite aqui"/>
                    </div>

                    <div>
                        <label>Combustível</label> <br/>   
                        <input value={fuel} onChange={alterarCombustivel} placeholder="Digite aqui"/>
                    </div>
                    
                    <button><Toaster text="EDITAR MOTO"/></button>
                </form>
            </Container>
        </div>
    )
}