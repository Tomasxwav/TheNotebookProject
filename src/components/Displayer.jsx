import '../css/styles.scss'
import { useContext} from 'react'
import { authContext } from '../context/AuthContext.jsx';

import {Footer} from './Footer'
import { routes } from '../mocks/routes.js';
import Router from '../Router/Router.jsx'


export function Displayer() {
  console.log("Se Carga Displayer");
  const auth = useContext(authContext)

    return (
      <>
        <Router routes={routes}  />
        {import.meta.env.DEV && <Footer/>} 
      </>
    )


      
}