import Icons from '../icons/Icons'
import { useAuth } from "../context/AuthContext";



{window.location.pathname }

export function Headers() {
    const auth = useAuth()
    
    // console.log(window.location.pathname);
    // console.log(path);
    // console.log();

    const handleLogout = () => {
        auth.logout()
    }
    // if ('/login'.includes(window.location.pathname) ) {
    //     return 
    // }
    return (
        <>
        <header className='np-header'>
            <div>
                <p><Icons width='30'/>
                The Note Project
                </p>
            </div> 
            {'/login'.includes(window.location.pathname)  || <a onClick={handleLogout} href='/login'>Log out</a> }
        </header>
        </>
    )
}