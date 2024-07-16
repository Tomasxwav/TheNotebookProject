import { useState } from 'react'
import app from '../database/connection'
import { useAuth } from '../context/AuthContext'

export function Login() {
    const auth = useAuth()
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const handleLogin = async (e) => {
        
        e.preventDefault()
        
        try {
            await auth.login(loginEmail, loginPassword); 
            window.location.href = '/notes'; 
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
        
    }

    

    return (
    <div className="np-login">
        <form onSubmit={(e) => handleLogin(e)} >
            <legend>Log In to your account</legend>
            <div className="np-login-field">
                <label >Email:</label>
                <input onChange={(e) => {setLoginEmail(e.target.value)}} type="text" placeholder="user123@emai.com"  autoComplete='email' />
            </div>
            <div className="np-login-field">
                <label>Password:</label>
                <input onChange={(e) => {setLoginPassword(e.target.value)}}  type="password" placeholder="8 characters" autoComplete='current-password'/>
            </div>
            <input type="submit" value="Log In" />
        </form>
    </div>
    )
}