import React, { useContext } from 'react'
import { Displayer} from './components/Displayer'
import { Headers } from './components/Headers'
import { authContext  } from './context/AuthContext'
import { CrudProvider } from './context/CrudContext'

import './css/styles.scss'
import { Login } from './components/Log-in'


function App() {
  const auth = useContext(authContext)
  const user = auth.user
  console.log("Se Carga App");
  // !user ? window.location.pathname = '/login' : {}
  return (
  <CrudProvider>
    <Headers/>
    {user ? <Displayer/> : <Login/>}
  </CrudProvider>
    
  )
}

export default App
