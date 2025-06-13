import React from 'react';
import { HeaderPi } from './componentes/HeaderPi';
import { InicioPi } from './componentes/InicioPi';
import { NewContaine } from './componentes/NewContaine';
import { FooterPi } from './componentes/FooterPi';
function App() {
  return (
    <div className='min-h-screen bg-atras bg-cover bg-center bg-no-repeat'>
      <HeaderPi />
      <main className='px-6 pt-8'>
        <div className='sm:flex sm:gap-6'>
          <InicioPi />
          <NewContaine />
        </div>
      </main>
       <FooterPi />
    </div>
  );
}

export default App;

