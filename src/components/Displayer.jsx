import {Main} from './Main.jsx'
import '../css/styles.scss'
import { Sidebar } from './Sidebar'

import { useState } from 'react'





export function Displayer() {

  return (
    <div className='np-content'>
      <Sidebar/>
      <Main/>
        

      
    </div>
      
  )
}