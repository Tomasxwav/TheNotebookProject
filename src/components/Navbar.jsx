import { getDatabase, ref, get, child, set } from "firebase/database";

import { useEffect, useState } from 'react';

const db = getDatabase()
const folders = ref(db)
const username = "tomas"

export function Navbar() {
  const [allFolders, setAllFolders] = useState([])
  


  useEffect(() => {
    let temp = []
    
    get(child(folders, 'users/' + username + '/folders/'))
      .then(resp => {
        resp.forEach(folder => {
          temp.push(folder.key)
          setAllFolders(temp)
        })
      })
  },[])

  // console.log(allFolders);

    return (
        <>
        <nav className='np-navbar'>
        <div>All</div>
        {allFolders.map((folder, index) => {
          return folder && <div key={index}>{folder}</div>
        })}
      </nav>
      </>
    )
}