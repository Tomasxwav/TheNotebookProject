import { Displayer} from './components/Displayer'
import { Headers } from './components/Headers'
import { AuthProvider } from './context/AuthContext'

import './css/styles.scss'


function App() {
  
  return (
  <AuthProvider>
    
    <Headers/>
    <Displayer/>
  
  </AuthProvider>
  )
}

export default App
