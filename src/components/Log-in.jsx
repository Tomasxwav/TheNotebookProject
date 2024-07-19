import { useState } from 'react'
import Icons from '../icons/Icons'
import { useAuth } from '../context/AuthContext'
import { useDatabase } from '../context/CrudContext'

export function Login() {



    const auth = useAuth()

    const crud = useDatabase()
    const [accountEmail, setAccountEmail] = useState("")
    const [accountPassword, setAccountPassword] = useState("")
    const [accountUsername, setAccountUsername] = useState("")


    const [isLogin, setIsLogin] = useState(true)
    
    const handleLogin = async (e) => {
        
        e.preventDefault()
        
        if (isLogin) {
            try {
                await crud.readUserData("reactr"); 
                await auth.login(accountEmail, accountPassword); 
                window.location.href = '/notes'; 
                
            } catch (error) {
                console.error('Error al iniciar sesión');
                alert(error.message)
            }
        } else {
            try {
                await crud.writeUserData(accountUsername, accountEmail)
                await auth.register(accountEmail,accountUsername ,accountPassword); 
                window.location.href = '/notes'; 
            } catch (error) {
                console.error('Error al crear usuario');
                alert(error.message)
            }
        }
        
    }

    const handleAction = (e) => {
        setIsLogin(false)
        
    }


    

    return (
    <div className="np-login">

        <div className="np-login-options">
            {isLogin && <button onClick={handleAction}>Create Account</button>}
            {!isLogin && (<a className="np-login-return" href="">
                <Icons icon={"return"} width='100%'/>
            </a>)}
        </div>



        <form onSubmit={(e) => handleLogin(e)} >
            {isLogin ? <legend>Log In to your account</legend> : <legend>Create your account</legend>}
            <div className="np-login-field">
                <label >Email:</label>
                <input onChange={(e) => {setAccountEmail(e.target.value)}} type="text" placeholder="user123@emai.com" autoComplete="email" required/>
            </div>

            {!isLogin && (
                <div className="np-login-field">
                    <label>username:</label>
                    <input
                    onChange={(e) => setAccountUsername(e.target.value)}
                    type="text2"
                    placeholder="pablito123"
                    autoComplete="username"
                    required
                    />
                </div>
                )}

            <div className="np-login-field">
                <label>Password:</label>
                <input onChange={(e) => {setAccountPassword(e.target.value)}}  type="password" placeholder="8 characters" autoComplete='current-password' required/>
            </div>
            <input type="submit" value={isLogin ? "Log In" : "Sign Up"} />
        </form>



    </div>
    )
}