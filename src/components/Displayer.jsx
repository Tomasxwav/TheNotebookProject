import '../css/styles.scss'
import { useContext} from 'react'
import { authContext } from '../context/AuthContext.jsx';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/system';

import { routes } from '../mocks/routes.js';
import Router from '../Router/Router.jsx'

const FixedAlert = styled(Alert)({
  position: 'fixed',
  transform: 'scale(70%)'
});


export function Displayer() {
  console.log("Se Carga Displayer");
  const auth = useContext(authContext)

    return (
      <>
        <Router routes={routes}  />
        {import.meta.env.DEV && (<FixedAlert variant="filled" style={{ bottom: '0.3rem', left: '-1rem'}} severity="info">Dev Mode</FixedAlert>)} 
      </>
    )


      
}