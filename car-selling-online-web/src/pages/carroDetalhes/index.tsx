import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseApiRequest } from '../../api/baseApiRequest';
import { ICar } from '../../api/interfaces/carro';


export default function CarroDetalhes() {
    const { id } = useParams()
    const [carro, setCarro] = useState<ICar>()

    useEffect(() => {
        baseApiRequest.get(`cars/${id}`).then((response) => {
            setCarro(response.data);
        })
    }, [])

    return (
        <div>
            <div className='text-white my-2 bg-secundary w-3/4 m-auto flex flex-col lg:flex-row lg:w-1/2 shadow-2xl'>
                <img className='object-fill h-full w-full lg:w-1/2' src={carro?.imgurl} alt={carro?.nome} />
                <div className='flex flex-col w-full'>
                    <div className='bg-secundaryDark p-2'>
                        <h1 className='text-4xl text-center'>{carro?.nome}</h1>
                    </div>
                    <div className='p-2'>
                        <p className='text-2xl'>{carro?.marca}</p>
                        <p className='text-sm text-primaryDark mb-4'>Fabricante</p>
                        <p className='text-2xl'>{carro?.modelo}</p>
                        <p className='text-sm text-primaryDark mb-4'>Modelo</p>
                        <p className='text-4xl'>{carro?.preco} R$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}