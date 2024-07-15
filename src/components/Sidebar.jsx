import Icons from '../icons/Icons'


export function Sidebar() {
    return (
        <>
        <nav className='np-sidebar'>
            <a className='np-sidebar-option' href='/draw' style={{backgroundColor: "#FECECE", color: 'black'}}>
                <div>
                    <Icons width='28' height='100px' color='black' icon='pencil'/>
                </div>
                <p>Draw</p>
            </a>

            <a href='/notes' className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='folder'/>
                </div>
                <p>Notes</p>
            </a>

            <a href='/' className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='shared'/>
                </div>
                <p>Shared</p>
            </a>

            <a href='/' className='np-sidebar-option'>
                <div>
                    <Icons width='28' height='100px' color='white' icon='notebook'/>
                </div>
                <p>Meet</p>
            </a>
        </nav>
        </>
    )
}