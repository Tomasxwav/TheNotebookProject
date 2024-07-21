import PreviewNote from './PreviewNote.jsx'
import { Navbar } from './Navbar.jsx';
import { getDatabase, ref, get, child } from "firebase/database";
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../context/AuthContext.jsx';


export function Main( ) {
  console.log("Se Carga Main");
  const auth = useContext(authContext)
  const username = auth.user.displayName
  // console.log(username);
  const db = getDatabase();
  const users = ref(db);
  
  const [allNotes, setAllNotes] = useState([])
  const [allFolders, setAllFolders] = useState([])
  const [loading, setLoading] = useState(true);
  
  const [filterbyfolder, setFilterbyfolder] = useState("All")
  
  const handleFolder = (foldername) =>  {
    setFilterbyfolder(foldername)
  }


  useEffect(() => {
    let tempNotes = []
    let tempFolders = []
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
        })
    
  } ,[filterbyfolder])



  console.log(allNotes);
  
  
  if (!username  ) {
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