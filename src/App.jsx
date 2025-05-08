import Header from './components/Header'
import Trades from './components/Trades'
import Footer from './components/Footer'
import './App.css'

function App() {
  
  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
      <Header />
      <Trades />
      <Footer />
      </div>
     
    </>
  )
}

export default App
