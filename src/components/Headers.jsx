import Icons from '../icons/Icons'
import { authContext } from "../context/AuthContext";
import { useContext } from 'react';



export function Headers() {
    const auth = useContext(authContext)
    const path = window.location.pathname;
    const isLoginPath = path === '/login';

    const handleLogout = () => {
        auth.logout()
    }
    return (
        <>
        <header className='np-header'>
            <div>
                <p><Icons width='30'/>
                The Note Project
                </p>
            </div> 
            {!isLoginPath && <a onClick={handleLogout} href='/login'>Log out</a> }
        </header>
        </>
    )
}