import PreviewNote from './PreviewNote.jsx'
import { Navbar } from './Navbar.jsx';

import app from '../database/connection.js';
import { getDatabase, ref, get, child } from "firebase/database";
import { useEffect, useState } from 'react';


export function Main() {
  

  const handleFolder = (foldername) =>  {
    setFilterbyfolder(foldername)
    // console.log(foldername);
  }

  const db = getDatabase();
  const users = ref(db);
  let username = "tomas";

  const [allNotes, setAllNotes] = useState([])
  const [allFolders, setAllFolders] = useState([])
  const [filterbyfolder, setFilterbyfolder] = useState("All")
  const [loading, setLoading] = useState(true);

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



  // console.log(allNotes);
  

  if (loading) {
    return <div className='np-main'>Loading...</div>; // Puedes personalizar esto con un spinner o algún indicador de carga
  }
  // console.log("desde main ", filterbyfolder);
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