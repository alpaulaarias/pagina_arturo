import { FaBicycle, FaTools, FaTshirt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import fondo from '../assets/imagenes/arturito.png';
import fondo2 from '../assets/imagenes/fondo2.png';

export const InicioPi = () => {
  return (
    <section className="bg-gris-oscuro p-6 rounded-xl shadow-md mx-auto my-6 w-[90%] max-w-[900px]">

      {/* Contenedor de título + imagen */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-4">
        {/* Título: al lado de la imagen en pantallas grandes */}
        <h1 className="text-blanco text-4xl sm:text-5xl font-extrabold sm:text-left leading-tight sm:w-1/2">
          ¡DESCUBRE LO MEJOR DE TI!
        </h1>

        {/* Imagen con tamaño fijo */}
        <picture className="sm:w-auto">
          <source media="(max-width: 640px)" srcSet={fondo2} />
          <source media="(min-width: 641px)" srcSet={fondo} />
          <img
            src={fondo2}
            alt="Imagen de fondo"
            className="w-[500px] h-auto object-cover rounded-md"
          />
        </picture>
      </div>

      {/* Texto descriptivo */}
      <div className="mb-6 mx-4 sm:mx-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
          NO HAY LÍMITE ALGUNO
        </h2>
        
        <p className="text-base sm:text-lg text-white leading-relaxed font-medium text-justify">
        Bienvenido a <strong>Arturo Ruedas</strong>, tu plataforma digital especializada en bicicletas y repuestos. 
            Con nuestra herramienta de visualización 3D, tendrás una experiencia dinámica.
            
            Facilitamos la compra/venta de repuestos con catálogo completo de piezas originales 
            para mantener tu bicicleta en perfecto estado. Todo desde nuestra aplicación, 
            con proceso seguro y rápido.
        </p>
      </div>

      {/* Botón al final */}
      <div className="text-center">
        <button className="bg-rojo-intenso text-white px-6 py-2 rounded-md uppercase font-semibold hover:bg-gris-oscuro transition duration-300 w-fit mx-auto">
          Descúbrelo
        </button>
      </div>

      {/* Sección de Categorías */}
      <div className="my-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white-800 mb-6 text-center border-b-2 border-rojo-intenso pb-2">
          NUESTRAS CATEGORÍAS
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Categoría 1 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center">
            <FaBicycle className="text-3xl text-rojo-intenso mx-auto mb-2"/>
            <h3 className="font-bold text-gray-800">Bicicletas</h3>
            <p className="text-sm text-gray-600 mt-1">Urbanas, MTB, Ruta</p>
          </div>
          
          {/* Categoría 2 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center">
            <FaTools className="text-3xl text-rojo-intenso mx-auto mb-2"/>
            <h3 className="font-bold text-gray-800">Repuestos</h3>
            <p className="text-sm text-gray-600 mt-1">Piezas originales</p>
          </div>
          
          {/* Categoría 3 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center">
            <FaBicycle className="text-3xl text-rojo-intenso mx-auto mb-2"/>
            <h3 className="font-bold text-gray-800">Accesorios</h3>
            <p className="text-sm text-gray-600 mt-1">Para tu cicla</p>
          </div>
          
          {/* Categoría 4 */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer text-center">
            <FaTshirt className="text-3xl text-rojo-intenso mx-auto mb-2"/>
            <h3 className="font-bold text-gray-800">Indumentaria</h3>
            <p className="text-sm text-gray-600 mt-1">Ropa ciclismo</p>
          </div>
        </div>
      </div>

      {/* Sección de Contáctanos */}
      <div className="my-10 bg-gray-50 p-6 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-rojo-intenso pb-2">
          CONTÁCTANOS
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Información de contacto */}
          <div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-rojo-intenso mr-3"/>
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-gray-700">+57 123 456 7890</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-rojo-intenso mr-3"/>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-700">contacto@arturoruedas.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-rojo-intenso mr-3"/>
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-gray-700">Calle 123 #45-67, Bogotá</p>
              </div>
            </div>
          </div>
          
          {/* Formulario simple */}
          <div>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rojo-intenso focus:border-transparent"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rojo-intenso focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tu mensaje" 
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rojo-intenso focus:border-transparent"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-rojo-intenso text-white px-6 py-3 rounded-lg uppercase font-bold hover:bg-gris-oscuro transition w-full"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 