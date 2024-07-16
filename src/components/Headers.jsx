import Icons from '../icons/Icons'
import app from "../database/connection";
import { useAuth } from "../context/AuthContext";





export function Headers() {
    const auth = useAuth()

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
            
            <a onClick={handleLogout} href='/login'>Log out</a>
        </header>
        </>
    )
}