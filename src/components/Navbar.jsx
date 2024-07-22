
export function Navbar({allFolders, filterbyfolder, handleFolder}) {

  
  // console.log("desde navbar ", filterbyfolder);

    return (
        <>
        <nav className='np-navbar'>
        <div  style={filterbyfolder === "All" ? { backgroundColor: "#414040" } : {} } onClick={(e) => {handleFolder("All")}}>All</div>
        {allFolders.map((folder, index) => {
          return <div onClick={(e) => {handleFolder(folder); console.log("le di clic");}} key={index}  style={filterbyfolder === folder ? { backgroundColor: "#414040" } : {}}>{folder}</div>
        })}
      </nav>
      </>
    )
}