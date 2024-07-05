import { useState } from 'react'
import { Displayer} from './components/Displayer'
import { Sidebar } from './components/Sidebar'
import Icons from './icons/Icons'

import './css/styles.scss'


function App() {
  return (
    <>
    <header className='np-header'>
      <p>
        <div><Icons width='30'/>
        The Note Project
        </div>
      </p>
    </header>

    <nav className='np-navbar'>
      <div>All</div>
      <div>Folder1</div>
      <div>Folder2</div>
      <div>Folder3</div>
      <div>Folder4</div>
      <div>Folder5</div>
      <div>Folder6</div>
      <div>Folder7</div>
      <div>Folder8</div>
      <div>Folder9</div>
      <div>Folder10</div>


    </nav>


    
    <Displayer/>
    
    </>
  )
}

export default App
