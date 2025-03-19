import { useEffect, useState } from 'react';

import Navbar from './components/Navbar'
import Home from './views/Home'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [todayFull, setTodayFull] = useState(new Date());
  const [today, setToday] = useState("");
  const [now, setNow] = useState("");

  useEffect(() => {
    setToday(todayFull.toLocaleDateString("es-ES"));
    setNow(todayFull.toLocaleTimeString("es-ES"));
  }, []);

  return (
    <>
      <Navbar today={today} />
      <main className='main'>
        <Home today={today} todayFull={todayFull} />
      </main>
      <Footer />
    </>
  )
}

export default App
