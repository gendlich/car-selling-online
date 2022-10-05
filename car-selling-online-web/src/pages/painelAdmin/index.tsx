import { useEffect, useState } from 'react'
import axios from 'axios';
import { ICar } from '../../api/interfaces/carro';
import { Link } from 'react-router-dom'

export default function PainelAdmin() {
    const [carros, setCarros] = useState<ICar[]>([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/cars').then((res) => {
            setCarros(res.data);
        })
    }, [])

    return (
        <div className="lg:w-1/2 w-3/4 bg-secundary mt-16 rounded m-auto text-center flex flex-col">
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
                        <td>{carro.nome}</td>
                        <td className='hidden lg:block'>{carro.id}</td>
                        <td><Link to={'/editar'}>Editar</Link> | <Link to={'/deletar'}>Deletar</Link></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
    )
}