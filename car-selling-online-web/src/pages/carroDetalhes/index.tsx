import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { ICar } from '../../api/interfaces/carro';


export default function CarroDetalhes() {
    const { id } = useParams()
    const [carro, setCarro] = useState<ICar>()

    useEffect(() => {
        axios.get(`http://localhost:3001/api/cars/${id}`).then((response) => {
            setCarro(response.data);
        })
    }, [])

    return (
        <div>
            <div className='text-white my-2 bg-secundary w-3/4 m-auto flex flex-col lg:flex-row lg:w-1/2'>
                <img className='object-fill h-full w-full lg:w-1/2' src={'https://media.istockphoto.com/photos/bmw-car-on-sunset-sky-picture-id1022249066?s=612x612'} alt={carro?.nome} />
                <div className='flex flex-col w-full'>
                    <div className='bg-secundaryDark p-2'>
                        <h1 className='text-4xl text-center'>{carro?.nome}</h1>
                    </div>
                    <div className='p-2'>
                        <p className='text-2xl'>{carro?.marca}</p>
                        <p className='text-sm text-primaryDark mb-4'>Fabricante</p>
                        <p className='text-2xl'>{carro?.modelo}</p>
                        <p className='text-sm text-primaryDark mb-4'>Modelo</p>
                        <p className='text-4xl'>100.000 R$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}