import { ICar } from '../../../api/interfaces/carro'
import { Link } from 'react-router-dom';

export default function CarroItem({ id, modelo, nome, marca, imgurl }: ICar) {
    return (
        <div className='h-64 my-2 bg-secundary flex w-full shadow-xl'>
            <img className='object-fill h-full w-4/5' src={imgurl} alt={nome} />
            <div className='flex flex-col w-full'>
                <Link to={`/carro/${id}`}>
                    <div className='bg-secundaryDark p-2 hover:bg-secundaryLight'>
                        <h1 className='text-2xl text-center'>{nome}</h1>
                    </div>
                </Link>
                <div className='p-2'>
                    <p className='text-lg'>{marca}</p>
                    <p className='text-sm text-primaryDark mb-4'>Fabricante</p>
                    <p className='text-lg'>{modelo}</p>
                    <p className='text-sm text-primaryDark mb-4'>Modelo</p>
                    <p className='text-2xl'>100.000 R$</p>
                </div>
            </div>
        </div>
    )
}