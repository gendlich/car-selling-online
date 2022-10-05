import { useEffect, useState } from 'react'
import axios from 'axios';
import { ICar } from '../../api/interfaces/carro';
import { Link } from 'react-router-dom'
import { baseApiRequest } from '../../api/interfaces/baseApiRequest';

export default function PainelAdmin() {
    const [carros, setCarros] = useState<ICar[]>([])

    function atualizarTabela() {
        axios.get('http://localhost:3001/api/cars').then((res) => {
            setCarros(res.data);
        })
    }

    useEffect(() => {
        atualizarTabela()
    }, [])

    function handleRemove(id: string) {
        baseApiRequest.delete(`cars/${id}`).then((response) => {
            window.alert(`O Carro foi removido do banco de dados.`);
            atualizarTabela()
        });
    }
    
    return (
        <div className="lg:w-1/2 w-3/4 bg-secundary mt-16 rounded m-auto text-center flex shadow-2xl flex-col">
            <Link to={'/carro/novo'}>
                <div className='hover:bg-secundaryDark rounded bg-secundaryLight p-2'>
                    Criar novo Carro
                </div>
            </Link>
            <table className="table-auto">
              <thead>
                <tr className='border'>
                  <th>Nome</th>
                  <th>Modelo</th>
                  <th>Fabricante</th>
                  <th>Valor</th>
                  <th className='hidden lg:block'>ID</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {carros.map((carro) => (
                    <tr className='border border-secundaryDark'>
                        <td>{carro.nome}</td>
                        <td>{carro.modelo}</td>
                        <td>{carro.marca}</td>
                        <td>{carro.preco}</td>
                        <td className='hidden lg:block'>{carro.id}</td>
                        <td><Link to={`/carro/${carro.id}/editar`}>Editar</Link> | <button onClick={() => handleRemove(carro.id)}>Deletar</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
    )
}