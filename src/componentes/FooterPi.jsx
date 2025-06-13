import React from 'react';

export const FooterPi = () => {
  return (
    <footer className="bg-negro text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Arturo Ruedas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
