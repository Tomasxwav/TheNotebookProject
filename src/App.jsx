import React, { useContext, useEffect, useState } from 'react'
import { Displayer} from './components/Displayer'
import { Headers } from './components/Headers'
import { authContext  } from './context/AuthContext'
import { CrudProvider } from './context/CrudContext'

import './css/styles.scss'
import { Login } from './components/Log-in'
import { Footer } from './components/Footer'


function App() {
  const auth = useContext(authContext)

  const [isLogin, setIsLogin] = useState(undefined)

    useEffect(() => {
        if(auth.user) {
            setIsLogin(auth.user)
        }
    },[auth])


  // console.log("Se Carga App");
  // !user ? window.location.pathname = '/login' : {}
  return (
  <CrudProvider>
    <Headers/>
    {isLogin !== undefined ? <Displayer/> : <div className='np-main'><Login/></div>}
    <Footer/>
  </CrudProvider>
    
  )
}

export default App
