import Icons from '../icons/Icons'
import { Link } from '../Link.jsx'

export function Sidebar() {
    return (
        <>
        <nav className='np-sidebar'>
            <Link to={'/draw'} state={{ isNewNote: true, caca: "si" }} className='np-sidebar-option' style={{backgroundColor: "#FECECE", color: 'black'}}>
                <div>
                    <Icons width='28' height='100px' color='black' icon='pencil'/>
                </div>
                <p>Draw</p>
            </Link>

            <Link to='/notes' className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='folder'/>
                </div>
                <p>Notes</p>
            </Link>

            <Link to='/' className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='shared'/>
                </div>
                <p>Shared</p>
            </Link>

            <Link to='/' className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='notebook'/>
                </div>
                <p>Meet</p>
            </Link>
        </nav>
        </>
    )
}