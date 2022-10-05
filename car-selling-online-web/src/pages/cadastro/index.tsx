import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { baseApiRequest } from "../../api/baseApiRequest";

export default function Cadastro() {
    const campos = [{
        value: 'nome',
        type: 'text',
        texto: 'Nome'
    },{
        value: 'email',
        type: 'text',
        texto: 'E-Mail'
    }, {
        value: 'senha',
        type: 'password',
        texto: 'Senha'
    }];

    const navigate = useNavigate()
    const [signupForm, setSignupForm] = useState({
        nome: "",
        email: "",
        senha: ""
    });

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setSignupForm({ ...signupForm, [name]: value })
    }

    function handleSignup(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        baseApiRequest.post('/registro', signupForm)
            .then((response) => {
            if (response) {
                window.alert('Registro realizado com sucesso')
                navigate('/');
            }
        })
    }


    return (
        <div className="text-white text-center">
            <div className="w-5/6 lg:w-1/3 pt-8 shadow-2xl bg-secundary m-auto rounded-lg my-16">
                <span className="text-3xl">Cadastro</span>
                <form onSubmit={handleSignup}>
                    {campos.map((campo, index) => (
                        <div key={index} className="p-3 flex text-start flex-col">
                            <input className="text-primaryDark text-xl p-2 rounded-lg" id={campo.value} name={campo.value} type={campo.type} onChange={onChange} />
                            <label htmlFor={campo.value}>{campo.texto}</label>
                        </div>
                    ))}
                    <div>
                        <button className="bg-secundaryDark w-full py-4 rounded-lg hover:bg-secundaryLight" type="submit">CONFIRMAR REGISTRO</button>
                    </div>
                </form>
            </div>
        </div>
    );
}