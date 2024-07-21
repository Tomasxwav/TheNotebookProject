import {Main} from '../components/Main.jsx'
import {Note} from '../components/Note.jsx'

export const routes = [
    {
      path: '/',
      Component: Main
    },
    {
      path: '/draw',
      Component: Note
    },
    {
      path: '/notes',
      Component: Main
    }
  ]