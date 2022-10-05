import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-16 bg-primary flex flex-row justify-between items-center shadow-2xl'>
            <div className='m-2 p-2 flex flex-row flex-nowrap hover:bg-primaryLight rounded-full'>
                <Link to='/'><strong>Car</strong>Selling</Link>
            </div>
            <div className='m-2 p-2 flex flex-row flex-nowrap'>
            <Link className='hover:bg-primaryLight p-2 rounded-full' to='/painel'>Painel</Link>
            <Link className='hover:bg-primaryLight p-2 rounded-full' to='/login'>Login</Link>
            </div>
        </div>
    )
}