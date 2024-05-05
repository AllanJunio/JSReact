import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import boasVindas from './component/boasVindas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
  
      <BoasVindas></BoasVindas>
    </main>
  ) 
}

export default App
