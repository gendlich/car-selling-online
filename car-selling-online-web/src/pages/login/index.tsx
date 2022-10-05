import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const campos = [{
        value: 'email',
        type: 'text',
        texto: 'E-Mail'
    }, {
        value: 'senha',
        type: 'password',
        texto: 'Senha'
    }];

    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        email: "",
        senha: ""
    });

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setLoginForm({ ...loginForm, [name]: value })
    }

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post('http://localhost:3001/api/login/', loginForm).then((response) => {
            if (response.data) {
                localStorage.setItem('token', response.data)
                window.alert('Login realizado com sucesso')
                navigate('/');
                window.location.reload();
            }
        })
    }


    return (
        <div className="text-white text-center">
            <div className="w-5/6 lg:w-1/3 pt-8 shadow-2xl bg-secundary m-auto rounded-lg my-16">
                <span className="text-3xl">Login</span>
                <form onSubmit={handleLogin}>
                    {campos.map((campo, index) => (
                        <div key={index} className="p-3 flex text-start flex-col">
                            <input className="text-primaryDark text-xl p-2 rounded-lg" id={campo.value} name={campo.value} type={campo.type} onChange={onChange} />
                            <label htmlFor={campo.value}>{campo.texto}</label>
                        </div>
                    ))}
                    <div>
                        <button className="bg-secundaryDark w-full py-4 rounded-lg hover:bg-secundaryLight" type="submit">LOGIN</button>
                    </div>
                </form>
            </div>
            <span>Não é cadastrado ainda? <Link to={'/cadastro'}><strong className="text-primaryLight" >cadastre-se aqui!</strong></Link></span>
        </div>
    );
}