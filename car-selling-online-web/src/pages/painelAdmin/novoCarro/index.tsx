import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { ICar } from "../../../api/interfaces/carro";
import axios from "axios";

export default function NovoCarro() {
    const navigate = useNavigate();
    const { id } = useParams()

    const isEdit = id ? true : false;
    const [updateCarroForm, setUpdateCarroForm] = useState<ICar>();
    useEffect(() => {
        if(isEdit) {
            axios.get(`http://localhost:3001/api/cars/${id}`).then((response) => {
                setUpdateCarroForm(response.data)
            })
        }
    }, [])

    const campos = [{
        value: 'nome',
        type: 'text',
        texto: 'Nome',
        apiValue: updateCarroForm?.nome
    },{
        value: 'marca',
        type: 'text',
        texto: 'Marca',
        apiValue: updateCarroForm?.marca
    },{
        value: 'modelo',
        type: 'text',
        texto: 'Modelo',
        apiValue: updateCarroForm?.modelo
    },{
        value: 'imgurl',
        type: 'text',
        texto: 'Url da Imagem',
        apiValue: updateCarroForm?.imgurl
    }];

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setUpdateCarroForm({ ...updateCarroForm!, [name]: value })
    }

    function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.put(`http://localhost:3001/api/cars/${id}`, updateCarroForm).then(() => { });
        window.alert(`O ${updateCarroForm?.nome} foi atualizado.`);
        navigate(`/painel`)
    }

    function handleInsert(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post(`http://localhost:3001/api/cars/`, updateCarroForm).then(() => { });
        window.alert(`O ${updateCarroForm?.nome} foi criado.`);
        navigate(`/painel`)
    }

    return (
        <div className="w-5/6 lg:w-1/3 pt-8 bg-secundary m-auto text-white text-center rounded-lg my-16">
            <span className="text-3xl">{isEdit ? 'Editar filme' : 'Novo Carro'}</span>
            <form onSubmit={isEdit ? handleUpdate: handleInsert}>
                {campos.map((campo, index) => (
                    <div key={index} className="p-3 flex text-start flex-col">
                        <input
                            className="text-primary text-xl p-2 rounded-lg"
                            id={campo.value}
                            name={campo.value}
                            type={campo.type}
                            value={campo.apiValue}
                            onChange={onChange}
                        />
                        <label htmlFor={campo.value}>{campo.texto}</label>
                    </div>
                ))}
                <div>
                    <button className="bg-secundaryDark w-full py-4 rounded-lg hover:bg-secundaryLight" type="submit">{isEdit ? 'CONFIRMAR EDIÇÃO' : 'INSERIR CARRO NOVO'}</button>
                </div>
            </form>
        </div>
    );
}