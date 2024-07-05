import '../css/styles.scss'
import Icons from '../icons/Icons'


export function Sidebar() {
    return (
        <>
        <nav className='np-sidebar'>
            <div className='np-sidebar-option' style={{backgroundColor: "#FECECE", color: 'black'}}>
                <div>
                    <Icons width='28' height='100px' color='black' icon='pencil'/>
                </div>
                <p>Draw</p>
            </div>

            <div className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='folder'/>
                </div>
                <p>Notes</p>
            </div>

            <div className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='shared'/>
                </div>
                <p>Shared</p>
            </div>

            <div className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='notebook'/>
                </div>
                <p>Meet</p>
            </div>
        </nav>
        </>
    )
}