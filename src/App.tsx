// import { useState } from 'react'

import Sec2About from './components/app/home/Sec2About'
import Sec1Hero from './components/app/home/Sec1Hero'
import Sec3Skills from './components/app/home/Sec3Skills'
import Sec4Projects from './components/app/home/Sec4Projects'
// import './App.css'

function App() {

  return (
    <main className='mx-10 my-5 [&>section]:mb-5 [&>section]:border [&>section]:rounded-2xl'>
      <Sec1Hero />

      <section>
        <Sec2About />
      </section>

      <section>
        <Sec3Skills />
      </section>

      <section>
        <Sec4Projects />
      </section>

    </main>
  )
}

export default App
