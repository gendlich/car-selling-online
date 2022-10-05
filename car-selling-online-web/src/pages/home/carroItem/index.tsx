import { ICar } from '../../../api/interfaces/carro'

export default function CarroItem({ id, modelo, nome, marca, imgurl }: ICar) {
    return (
        <div className='h-64 my-2 bg-secundaryLight flex w-full'>
            <img className='object-fill h-full w-4/5' src={imgurl} alt={nome} />
            <div className='flex flex-col w-full'>
                <div className='bg-primaryLight p-2'>
                    <h1 className='text-2xl text-center'>{nome}</h1>
                </div>
                <div className='p-2'>
                    <p className='text-lg'>{marca}</p>
                    <p className='text-sm text-primaryDark'>Fabricante</p>
                    <br/>
                    <p className='text-lg'>{modelo}</p>
                    <p className='text-sm text-primaryDark'>Modelo</p>
                </div>
            </div>
        </div>
    )
}