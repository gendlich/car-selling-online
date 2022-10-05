import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ICar } from '../../api/interfaces/carro';
import CarroItem from './carroItem';

export default function Home() {
    const navigate = useNavigate();

    const [carros, setCarros] = useState<ICar[]>([])


    useEffect(() => {
        axios.get('http://localhost:3001/api/cars').then((res) => {
            setCarros(res.data);
        })
    }, [])

        return (
            <>
                <div className='flex flex-col text-white m-4 rounded items-center lg:w-1/2 lg:mx-auto lg:justify-center lg:flex-row lg:flex-wrap'>
                    {carros.map((carro) => (
                        <CarroItem 
                        key={carro.id}
                        id={carro.id}
                        modelo={carro.modelo}
                        nome={carro.nome}
                        marca={carro.marca}
                        preco={carro.preco}
                        imgurl={carro.imgurl}
                        />
                    ))}
                </div>
            </>
        )
}