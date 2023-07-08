import React from 'react';
import {Divider} from "@mui/material";
import { Link } from 'react-router-dom';

export default function List() {
    const [campaigns, setCampaigns] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/bikes')
            .then(res => res.json())
            .then(data => setCampaigns(data));
    }, []);

    const remove = (id) => {
        if (false === window.confirm('Tem certeza?')) {
            return;
        }

        fetch(`http://localhost:8000/campaigns/${id}`, {
            method: 'DELETE'
        });

        setCampaigns(
            campaigns.filter(cada => cada.id !== id)
        );
    }; 

    return (
        <div>
            <h1>Admin</h1>
            <Divider/>

            <Link to="/admin/campanhas/nova">Nova Campanha</Link>

            <table width="100%">
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
                    {campaigns.map(cada => {
                        return (
                            <tr>
                                <td>{cada.name}</td>
                                <td>{cada.price}</td>
                                <td>{cada.cv}</td>
                                <td> <img width="100px" src={cada.image} alt='moto'/> </td>
                                <td>
                                    <Link to={"/admin/campanhas/"+cada.id+"/editar"}>
                                        <button>Editar</button>
                                    </Link>
                                    <button onClick={() => remove(cada.id)}>Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}