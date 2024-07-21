import { useEffect, useState } from "react"
import { CircularProgress } from '@mui/material';
import {Sidebar} from '../components/Sidebar.jsx'

export default  function Router({routes = []}) {
    const [currentPage, setCurrentPage] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPage(window.location.pathname)
        }
        window.addEventListener('pushState', onLocationChange)
        window.addEventListener('popstate', onLocationChange)
        
        return () => {
            window.removeEventListener('pushState', onLocationChange)
            window.removeEventListener('popstate', onLocationChange)
        }

    },[])

    const Page = routes.find(({path}) => path === currentPage)?.Component
    // console.log(Page==='/Main');
    return (
        Page ? (<div className="np-content">
            <Sidebar/>
            <Page/>
            </div>
         ): (<div align='center'><CircularProgress/></div>)
    )

}