import Icons from '../icons/Icons'
import { authContext } from "../context/AuthContext";
import { useContext } from 'react';
import { Link } from '../Link';



export function Headers() {
    const auth = useContext(authContext)
    const path = window.location.pathname;
    const isLoginPath = path === '/';

    const handleLogout = () => {
        auth.logout()
        window.location.href = '/'; 
    }
    return (
        <>
        <header className='np-header'>
            <div>
                <p><Icons width='30'/>
                The Note Project
                </p>
            </div> 
            {!isLoginPath && <a onClick={handleLogout} href='/'>Log out</a> }
        </header>
        </>
    )
}