import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../authContext';

export default function Header() {
    const { Logout, authenticated } = useAuth();
    const navigate = useNavigate()
    const options = authenticated ? (
        <>
        <Link className='hover:bg-primaryLight p-2 rounded-full' to='/painel'>Painel</Link>
        <button className='hover:bg-primaryLight p-2 rounded-full' onClick={handleLogout}>Logout</button>
        </>
    ) : (
        <>
        <Link className='hover:bg-primaryLight p-2 rounded-full' to='/login'>Login</Link>
        </>
    )

    function handleLogout() {
        Logout().then(() => {
            window.alert('Logout realizado com sucesso')
            navigate('/');
        });
    }
console.log(authenticated)
    return (
        <div className='h-16 bg-primary flex flex-row justify-between items-center shadow-2xl'>
            <div className='m-2 p-2 flex flex-row flex-nowrap hover:bg-primaryLight rounded-full'>
                <Link to='/'><strong>Car</strong>Selling</Link>
            </div>
            <div className='m-2 p-2 flex flex-row flex-nowrap'>
            {options}
            </div>
        </div>
    )
}