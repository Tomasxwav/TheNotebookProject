import PreviewNote from './PreviewNote.jsx'

import app from '../database/connection.js';
import { getDatabase, ref, get, child } from "firebase/database";
import { useEffect, useState } from 'react';


export function Main() {
  const [allNotes, setAllNotes] = useState([])
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
                
                // console.log(allNotes);
                temp.push(note.val());
                setAllNotes(temp)
              })
  
            })
  
  
          })
  
        })
  } ,[])

  console.log(allNotes);

  return (
      <>
      {allNotes.map((note, index) => (
        note && <PreviewNote key={index} stickyColor={note.color} title={note.title}  content={note.content} date={note.date}/>
        // <h1 key={index}>{note.title}</h1>
      ))}
      
      
      </>
  )
}