// import { useState } from 'react'

import Sec2About from './components/about/Sec2About'
import Sec1Hero from './components/hero/Sec1Hero'
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

    </main>
  )
}

export default App
