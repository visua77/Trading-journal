import { useState } from 'react'
import Header from './components/Header'
import Trades from './components/Trades'
import Footer from './components/Footer'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />
      <Trades />
      <Footer />
      </div>
     
    </>
  )
}

export default App
