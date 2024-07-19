import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";


import '../css/styles.scss'
import {Login} from './Log-in.jsx'
import {Main} from './Main.jsx'
import {Note} from './Note.jsx'
import {Sidebar} from './Sidebar'


export function Displayer() {
  // console.log("Se Carga Displayer");
  const [currentPage, setCurrentPage] = useState(window.location.pathname)
  const [currentUser, setCurrentUser] = useState("")
  
  const auth = getAuth()
  
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setIsLogged(true)
          setCurrentUser(currentUser)
        } else {
          setIsLogged(false)
        }
      });
    }, []);




  if (isLogged && auth.currentUser) {
    return (
      <>
      <div className='np-content'>
        {currentPage != '/login' && <Sidebar/>}
        {currentPage == '/notes' && <Main username = {auth.currentUser.displayName}/>}
        {currentPage == '/draw' && <Note/>}
      </div>
      </>
    )
  } else if (!isLogged) { 
    return (
      <div className="np-displayer">
        <div className='np-login'>
          <Login/>
        </div>
      </div>
    )
  }


      
}