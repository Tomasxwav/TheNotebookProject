import PreviewNote from './PreviewNote.jsx'
import { Navbar } from './Navbar.jsx';
import { getDatabase, ref, get, child } from "firebase/database";
import { useEffect, useState } from 'react';


export function Main( {username} ) {
  // console.log("Se Carga Main");
  // const username = "tomas"
  // console.log(currentUser);

   
  
  const db = getDatabase();
  const users = ref(db);
  
  
  const [allNotes, setAllNotes] = useState([])
  const [allFolders, setAllFolders] = useState([])
  const [loading, setLoading] = useState(true);
  
  const [filterbyfolder, setFilterbyfolder] = useState("All")
  // console.log("desde main ", filterbyfolder);
  
  const handleFolder = (foldername) =>  {
    setFilterbyfolder(foldername)
  }


  useEffect(() => {
    let tempNotes = []
    let tempFolders = []
    // console.log("con cada click debe entrar aqui");
    get(child(users, 'users/' + username + '/folders/'))
        .then(folders => {
          
          folders.forEach(folder => {
            tempFolders.push(folder.key)
            if (filterbyfolder === "All" || filterbyfolder === folder.key) {
              folder.forEach(notes => {

                notes.forEach((note) => {
                  
                  tempNotes.push(note.val()) ;

                })
    
              })
            }
  
          })
          setAllFolders(tempFolders)
          setAllNotes(tempNotes)
          setLoading(false);
          // if (user.displayName) {
          //   setLoading(false);
          //   // return
          // } else {
          //   setLoading(true);
          //   // return
          // }
        })
    
  } ,[filterbyfolder])



  // console.log(allNotes);
  
  
  if (loading  ) {
    return <div className='np-main'>Loading...</div>;
  }
  
  return (
      <div className='np-main'>
        <Navbar allFolders={allFolders} filterbyfolder={filterbyfolder} handleFolder={handleFolder}/>
        <div className='np-displayer'>
          {allNotes.map((note, index) => (
            note && <PreviewNote key={index} stickyColor={note.color} title={note.title}  content={note.content} date={note.date}/>
          ))}
        </div>
      </div>
      
  )
}