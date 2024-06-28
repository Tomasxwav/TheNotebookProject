import { useState } from 'react'
import { Displayer} from './components/Displayer'
import './css/styles.scss'


function App() {
  return (
    <>
    <header className='np-header'>
      <p>The Note Project</p>
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


    <nav className='np-sidebar'>
      <div className='np-sidebar-option'>
        <div>ICON</div>
        <p>Draw</p>
      </div>

      <div className='np-sidebar-option'>
      <div>ICON</div>
      <p>Notes</p>

      </div>

      <div className='np-sidebar-option'>
      <div>ICON</div>
      <p>Shared</p>

      </div>

      <div className='np-sidebar-option'>
      <div>ICON</div>
      <p>Meet</p>

      </div>
    </nav>
    <Displayer/>
    
    </>
  )
}

export default App
