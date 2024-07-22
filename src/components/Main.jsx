import PreviewNote from './PreviewNote.jsx'
import { Navbar } from './Navbar.jsx';
import { getDatabase, ref, get, child } from "firebase/database";
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../context/AuthContext.jsx';


export function Main( ) {
  console.log('Se carga el Main');
  
  const auth = useContext(authContext)
  const username = auth.user.displayName
  const db = getDatabase();
  const users = ref(db);

  const [allFolders, setAllFolders] = useState([])
  const [allInfo, setAllInfo] = useState([]);
  
  const [filterbyfolder, setFilterbyfolder] = useState("All")
  const [areChanges, setAreChanges] = useState()
  
  useEffect(() => {
    let tempInfo = []
    let tempFolders = []
    get(child(users, 'users/' + username + '/folders/'))
    .then(folders => {
      
      folders.forEach(folder => {
        tempFolders.push(folder.key)
        if (filterbyfolder === "All" || filterbyfolder === folder.key) {
          
          folder.forEach(notes => {
            
            notes.forEach((note) => {
              
              tempInfo.push({note: note.val(), folder: folder.key}) ;
              
            })
            
          })
        }
        
      })
      setAllFolders(tempFolders)
      setAllInfo(tempInfo)
    })
  } ,[filterbyfolder, areChanges])

  const handleFolder = (foldername) =>  {
    setFilterbyfolder(foldername)
  }
  
  
  if (!username  ) {
    return <div className='np-main'>Loading...</div>;
  }
  
  return (
      <div className='np-main'>
        <Navbar allFolders={allFolders} filterbyfolder={filterbyfolder} handleFolder={handleFolder}/>
        <div className='np-displayer'>
          {allInfo.map(({note, folder}, index) => (
            note && <PreviewNote key={index} stickyColor={note.color} title={note.title}  content={note.content} date={note.date} note={note} folder={folder} areChanges={areChanges} setAreChanges={setAreChanges} allFolders={allFolders}/>
          ))}
        </div>
      </div>
      
  )
}