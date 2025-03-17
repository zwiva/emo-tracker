import { useEffect, useState } from 'react';

import Navbar from './components/Navbar'
import Home from './views/Home'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState("");
  const [now, setNow] = useState("");

  useEffect(() => {
    setToday(date.toLocaleDateString("es-ES"));
    setNow(date.toLocaleTimeString("es-ES"));
  }, []);

  return (
    <>
      <Navbar today={today} />
      <main className='main'>
        <Home date={today} />
      </main>
      <Footer />
    </>
  )
}

export default App
