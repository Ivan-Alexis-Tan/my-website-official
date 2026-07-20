// import { useState } from 'react'

import Sec2About from './components/app/home/Sec2About'
import Sec1Hero from './components/app/home/Sec1Hero'
import Sec3Skills from './components/app/home/Sec3Skills'
// import './App.css'

function App() {

  return (
    <main className='mx-10 [&>section]:border [&>section]:rounded-2xl [&>section]:mb-5'>
      <section>
        <Sec1Hero />
      </section>

      <section>
        <Sec2About />
      </section>

      <section>
        <Sec3Skills />
      </section>

    </main>
  )
}

export default App
