import PreviewNote from './PreviewNote.jsx'
import notes from "../mocks/database.json"

import app from '../database/connection.js';
import { getDatabase, ref, get, child } from "firebase/database";

const json = [
    {
      "color": '#FECECE',
      "titulo": "Mi Primer JSON",
      "contenido": "Este es el contenido de ejemplo de mi primer JSON.",
      "fecha": "2024-06-28"
    },
    {
      "color": "#CED2FE",
      "titulo": "Segundo Ejemplo",
      "contenido": "Este es el contenido del segundo ejemplo.",
      "fecha": "2024-06-29"
    },
    {
      "color": "#CEFEDE",
      "titulo": "Tercer Ejemplo",
      "contenido": "Aquí va el contenido del tercer ejemplo.",
      "fecha": "2024-06-30"
    },
    {
      "color": "#FDFECE",
      "titulo": "Cuarto Ejemplo",
      "contenido": "Contenido del cuarto ejemplo.",
      "fecha": "2024-07-01"
    },
    {
      "color": "#FACEFE",
      "titulo": "Quinto Ejemplo",
      "contenido": "Este es el contenido del quinto ejemplo.",
      "fecha": "2024-07-02"
    },
    {
      "color": "#F7FECE",
      "titulo": "Sexto Ejemplo",
      "contenido": "Contenido del sexto ejemplo.",
      "fecha": "2024-07-03"
    }
  ]
const db = getDatabase();
const users = ref(db);

let username = "tomas";
let folder = "folder1";

get(child(users, 'users/' + username + '/folders:/' + folder)).then((notes) => {
  console.log(notes.val());
  const mynotes = notes.forEach((e) => { console.log(e.val())})
}).catch((error) => {
  console.error(error);
});

export function Main() {
  
  return (
      <>
      {json.map((note, index) => (
          <PreviewNote key={index} stickyColor={note.color} title={note.titulo}  content={note.contenido} date={note.fecha}/>
      ))}
      <PreviewNote title="caca"/>
      
      </>
  )
}