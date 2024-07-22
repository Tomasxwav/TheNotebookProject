export function navigate (href, state = {}) {
    window.history.pushState(state, '', href)
    const navigateEvent = new Event('pushState')
    window.dispatchEvent(navigateEvent)
  }

                                  
export function Link ({target, to, state = {}, ...atributes}) {
    const handleClick = (event) => {

        const isMainEvent = event.button === 0;
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if ( isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to, state) 
        }
    
    }
return <a onClick={handleClick} href={to} target={target} {...atributes}></a>
}