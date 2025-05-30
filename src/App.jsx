import React from 'react'
import { HeaderPi } from './componentes/HeaderPi'
import { InicioPi } from './componentes/InicioPi'
import { NewContaine } from './componentes/NewContaine'

function App() {
  

  return (

  <div className='bg-gris-oscuro'>
      <HeaderPi />
    <main className='px-6 pt-8'>
      <div className='sm:flex sm:gap-6'>
        <InicioPi />
        <NewContaine />
      </div>
    </main>
  </div>
);

}

export default App
