import { useEffect, useState } from 'react'
import { useAuth } from "../context/AuthContext.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import '../css/styles.scss'
import {Login} from './Log-in.jsx'
import {Main} from './Main.jsx'
import {Note} from './Note.jsx'
import {Navbar} from './Navbar.jsx'
import {Sidebar} from './Sidebar'


export function Displayer() {

  const [currentPage, setCurrentPage] = useState(window.location.pathname)
  
  const auth = getAuth()
  
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
      const logged = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setIsLogged(true)
        } else {
          setIsLogged(false)
        }
      });
    }, []);







  if (isLogged) {
    // console.log(auth.currentUser.email);
    return (
      <>
      {/* {(currentPage == '/notes' || currentPage == '/') && <Navbar/>} */}
      <div className='np-content'>
        {currentPage != '/login' && <Sidebar/>}
        {currentPage == '/draw' && <Note/>}
        {currentPage == '/notes' && <Main/>}
      </div>
      </>
    )
  } else { 
    return (
      <div className="np-displayer">
        <div className='np-login'>
          <Login/>
        </div>
      </div>
    )
  }


      
}