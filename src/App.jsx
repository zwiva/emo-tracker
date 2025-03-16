import Home from './views/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  
  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
