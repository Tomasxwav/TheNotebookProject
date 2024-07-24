import Icons from '../icons/Icons'
import { authContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from 'react';
import { Link } from '../Link';



export function Headers() {
    const auth = useContext(authContext)
    const [isLogin, setIsLogin] = useState(undefined)

    useEffect(() => {
        if(auth.user) {
            setIsLogin(auth.user)
        }
    },[auth])


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
            {isLogin !== undefined && <a onClick={handleLogout} href='/'>Log out</a> }
        </header>
        </>
    )
}