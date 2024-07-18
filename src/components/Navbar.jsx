
export function Navbar({allFolders, filterbyfolder, handleFolder}) {
  

  
  // console.log("desde navbar ", filterbyfolder);

    return (
        <>
        <nav className='np-navbar'>
        <div  style={filterbyfolder === "All" ? { backgroundColor: "#414040" } : {} } onClick={(e) => {handleFolder(e.target.innerText)}}>All</div>
        {allFolders.map((folder, index) => {
          return folder && <div onClick={(e) => {handleFolder(folder)}} key={index}  style={filterbyfolder === folder ? { backgroundColor: "#414040" } : {}}>{folder}</div>
        })}
      </nav>
      </>
    )
}