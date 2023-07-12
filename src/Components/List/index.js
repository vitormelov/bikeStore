import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.scss"

export default function List() {
    const [bikes, setBikes] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, []);

    const remove = (id) => {
        if (false === window.confirm('Tem certeza?')) {
            return;
        }

        fetch(`http://localhost:8000/bikes/${id}`, {
            method: 'DELETE'
        });

        setBikes(
            bikes.filter(cada => cada.id !== id)
        );
    }; 

    return (
        <div>
            <Container>
                <Link to="/admin/add"><Button variant='outlined' color='success'>Adicionar veículo</Button></Link>

                <table width="100%" className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>CV</th>
                            <th>Imagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bikes.map(cada => {
                            return (
                                <tr>
                                    <td>{cada.name}</td>
                                    <td>{cada.price}</td>
                                    <td>{cada.cv}</td>
                                    <td> <img width="100px" src={cada.image1} alt='moto'/> </td>
                                    <td>
                                        <Link to={"/admin/produto/"+cada.id+"/editar"}>
                                            <button className='table-edit'>Editar</button>
                                        </Link>
                                        <button className='table-delete' onClick={() => remove(cada.id)}>Excluir</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}