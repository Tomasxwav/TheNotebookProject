import Icons from '../icons/Icons'
import { Link } from '../Link.jsx'

export function Sidebar() {

    const handleShow = (e) => {
        
        if(e.movementX === 1) {
            e.target.style.left = '0rem'
            setTimeout(()=> {
                document.querySelector('.np-sidebar').style.left = '-6rem'
            }, 5000)
        } else if (e.movementX === -3) {
            e.target.style.left = '-6rem' 
            
        }
    }
    const handleHide = () => {
        document.querySelector('.np-sidebar').style.left = '0rem'
        setTimeout(()=> {
            document.querySelector('.np-sidebar').style.left = '-6rem'
        }, 2000)
    }


    return (
        <>
        <nav className='np-sidebar' onPointerMoveCapture={handleShow} onClick={handleHide} >
            <Link to={'/draw'} state={{ isNewNote: true }} className='np-sidebar-option' style={{backgroundColor: "#FECECE", color: 'black'}}>
                <div>
                    <Icons width='28' height='100px' color='black' icon='pencil'/>
                </div>
                <p>New</p>
            </Link>

            <Link to='/notes' className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='folder'/>
                </div>
                <p>Notes</p>
            </Link>

            <Link to='/' className='np-sidebar-option' style={{display: "none"}}>
                <div>
                    <Icons width='28' height='100px' color='white' icon='shared'/>
                </div>
                <p>Shared</p>
            </Link>

            <Link to='/' className='np-sidebar-option' style={{display: "none"}}>
                <div>
                    <Icons width='28' height='100px' color='white' icon='notebook'/>
                </div>
                <p>Meet</p>
            </Link>
        </nav>
        </>
    )
}