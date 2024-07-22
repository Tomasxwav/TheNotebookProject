import { useEffect, useState } from "react"
import { NoteProvider } from '../context/NoteContext'
import { CircularProgress } from '@mui/material';
import {Sidebar} from '../components/Sidebar.jsx'

export default  function Router({routes = []}) {
    const [currentPage, setCurrentPage] = useState({
        path: window.location.pathname,
        state: window.history.state,
    });

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPage({
                path: window.location.pathname,
                state: window.history.state,
            });
        }
        window.addEventListener('pushState', onLocationChange)
        window.addEventListener('popstate', onLocationChange)
        
        return () => {
            window.removeEventListener('pushState', onLocationChange)
            window.removeEventListener('popstate', onLocationChange)
        }

    },[])

    const Page = routes.find(({path}) => path === currentPage.path)?.Component
    return (
        Page ? (<div className="np-content">
            <Sidebar/>
            <NoteProvider>
                <Page state={currentPage.state}/>
            </NoteProvider>
            </div>
         ): (<div align='center'><CircularProgress/></div>)
    )

}