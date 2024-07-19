import React from 'react'
import { Displayer} from './components/Displayer'
import { Headers } from './components/Headers'
import { AuthProvider } from './context/AuthContext'
import { CrudProvider } from './context/CrudContext'

import './css/styles.scss'


function App() {
  // console.log("Se Carga App");
  return (
  <CrudProvider>
  <AuthProvider>

      
    <Headers/>
    <Displayer/>

  
  </AuthProvider>
  </CrudProvider>
  )
}

export default App
