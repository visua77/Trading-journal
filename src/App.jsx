import { useState } from 'react'
import Header from './components/Header'
import Trades from './components/Trades'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />
      <Trades />
      </div>
     
    </>
  )
}

export default App
