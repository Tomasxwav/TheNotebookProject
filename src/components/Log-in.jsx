import { useState, useContext, useEffect } from 'react'
import Icons from '../icons/Icons'
import { authContext } from '../context/AuthContext'
import { crudContext } from '../context/CrudContext'
import {Link} from '../Link.jsx'


export function Login() {
    console.log("Se carga login");
    const auth = useContext(authContext)
    const crud = useContext(crudContext)
    console.log(2, auth.user);

    const [accountEmail, setAccountEmail] = useState("")
    const [accountPassword, setAccountPassword] = useState("")
    const [accountUsername, setAccountUsername] = useState("")
    
    const [isLogin, setIsLogin] = useState(true)

    const handleLogin = async (e) => {
        e.preventDefault()
    
        if (isLogin) {
            try {
                const log = await auth.login(accountEmail, accountPassword); 
                const user = await crud.readUserData(log.user.displayName)
                console.log(user);
                // alert("Bienvenido " + user.username);
                window.location.href = '/notes'; 
                
            } catch (error) {
                console.error('Error al iniciar sesión');
                alert(error.message)
            }
        } else {
            try {
                await crud.writeUserData(accountUsername, accountEmail)
                await auth.register(accountEmail,accountUsername ,accountPassword); 
                window.location.href = '/'; 
            } catch (error) {
                console.error('Error al crear usuario');
                alert(error.message)
            }
        }
    }
    
    const handleAction = (log) => {
        setIsLogin(log)
    }
        
    return (
    <div className="np-displayer">
        <div className="np-login">
            <div className="np-login-options">

                {isLogin ? 
                    (<button onClick={() => {handleAction(false)}}>Create Account</button>) 
                    :
                    (<Link onClick={() => handleAction(true)} className="np-login-return" >
                        <Icons icon={"return"} width='100%'/>
                    </Link>)
                    }

            </div>

            <form onSubmit={(e) => handleLogin(e)} >
                {isLogin ? <legend>Log In to your account</legend> : <legend>Create your account</legend>}

                <div className="np-login-field">
                    <label >Email:</label>
                    <input 
                    onChange={(e) => {setAccountEmail(e.target.value)}} 
                    type="text" 
                    placeholder="user123@emai.com" 
                    autoComplete="email" 
                    writingsuggestions="true"
                    required
                    />
                </div>

                {!isLogin && (
                    <div className="np-login-field">
                        <label>username:</label>
                        <input
                        onChange={(e) => setAccountUsername(e.target.value)}
                        type="text2"
                        writingsuggestions="true"
                        placeholder="pablito123"
                        autoComplete="username"
                        required
                        />
                    </div>
                    )}

                <div className="np-login-field">
                    <label>Password:</label>
                    <input 
                    onChange={(e) => {setAccountPassword(e.target.value)}}  
                    type="password" 
                    writingsuggestions="true"
                    placeholder="8 characters" 
                    autoComplete='current-password' 
                    required
                    />
                </div>

                <input writingsuggestions="true" type="submit" value={isLogin ? "Log In" : "Sign Up"} />
            </form>

        </div>
    </div>
)}

        

        


    

