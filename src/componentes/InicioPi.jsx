import fondo from '../assets/imagenes/arturito.png'
import fondo2 from '../assets/imagenes/fondo2.png'


export const InicioPi = () => {
return (
    <section className='mb-1 min-h-screen bg-gris-medio m-2'>
        <picture>
            <source media='(max-width: 640px)'srcSet={fondo2} />
            <source media='(min-width: 641px)'srcSet={fondo} />
        <h1 className='text-[30px] font-bold sm:text-[50px] leading-none'>ARTURO RUEDAS </h1>
        <img src={fondo2} alt="Lista" className="w-auto h-px-auto m-6" />
        </picture>
            <div className='sm:flex m-2'>
                <div className='flex-1 py-6 pt-9'>
                    <h2 className='text-[30px] font-bold sm:text-[50px] leading-none'>
UN BESITO EN EL CORAZON</h2>
        </div>
                <div className='flex-1 pt-9'>
        <p className='text-[13px] mb-10 sm:text-[20px]'> hola te quiero mucho amor te  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, obcaecati. Saepe, repellendus sequi accusantium quia architecto sit modi, dignissimos unde dolor voluptatum inventore distinctio nesciunt odio? Nulla nobis qui enim?</p>
            <button className='bg-rojo-intenso w-[185px] h-[48px] uppercase text-blanco 
            hover:bg-gris-oscuro' > botoncito</button>
        </div> 
        </div> 
    </section>
)
};