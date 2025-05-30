import MenuLista from '../assets/imagenes/lista.png'



export const NavBar = () => {
  return (
    <>
      <ul className="hidden sm:flex sm:w-[438px] sm:place-content-around sm:items-center text-[18px] sm:text-[16px] font-semibold tracking-wide">
        <li>
          <a href="#" className="hover:text-red-600 transition">INICIO</a>
        </li>
        <li>
          <a href="#" className="hover:text-red-600 transition">CATEGORIAS</a>
        </li>
        <li>
          <a href="#" className="hover:text-red-600 transition">NOSOTROS</a>
        </li>
      </ul>

      <img
        src={MenuLista}
        alt="MenuLista"
        className="w-10 h-auto cursor-pointer sm:hidden ml-4"
      />
    </>
  )
}


