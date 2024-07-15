import {Main} from './Main.jsx'
import {Note} from './Note.jsx'
import {Navbar} from './Navbar.jsx'
import '../css/styles.scss'
import { Sidebar } from './Sidebar'

import { useState } from 'react'


export function Displayer() {

  const [currentPage, setCurrentPage] = useState(window.location.pathname)


  return (
    <>
    {(currentPage == '/notes' || currentPage == '/') && <Navbar/>}
    <div className='np-content'>
      <Sidebar/>
      <div className='np-displayer'>
        {currentPage == '/draw' && <Note/>}
        {currentPage == '/notes' && <Main/>}
      </div>

      
    </div>
    </>
  )
}