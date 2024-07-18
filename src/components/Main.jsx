import PreviewNote from './PreviewNote.jsx'
import { Navbar } from './Navbar.jsx';

import app from '../database/connection.js';
import { getDatabase, ref, get, child } from "firebase/database";
import { useEffect, useState } from 'react';


export function Main() {
  const [allNotes, setAllNotes] = useState([])

  const [filterbyfolder, setFilterbyfolder] = useState("All")

  const db = getDatabase();
  const users = ref(db);
  let username = "tomas";
  let folder = "folder1";
  useEffect(() => {
    let temp = []
    get(child(users, 'users/' + username + '/folders/'))
        .then(folders => {
  
          folders.forEach(folder => {
  
            folder.forEach(notes => {
  
              notes.forEach((note) => {
                
                temp.push(note.val());
                setAllNotes(temp)
              })
  
            })
  
          })
  
        })
  } ,[])

  // console.log(allNotes);

  return (
      <div className='np-main'>
        <Navbar/>
        <div className='np-displayer'>
          {allNotes.map((note, index) => (
            note && <PreviewNote key={index} stickyColor={note.color} title={note.title}  content={note.content} date={note.date}/>
          ))}
        </div>
      </div>
      
  )
}