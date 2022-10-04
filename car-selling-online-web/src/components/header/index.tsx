import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-16 bg-primary flex flex-row justify-between items-center'>
            <div className='m-2 p-2 flex flex-row flex-nowrap hover:bg-primaryLight rounded-full'>
                <Link to='/'><strong>Car</strong>Selling</Link>
            </div>
            <div className='m-2 p-2 flex flex-row flex-nowrap'>
            <Link className='hover:bg-primaryLight p-2 rounded-full' to='/login'>Login</Link>
            <Link className='bg-primaryLight hover:bg-secundaryLight p-2 rounded-full' to='/cadastro'>Cadastrar</Link>
            </div>
        </div>
    )
}