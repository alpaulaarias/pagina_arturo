import { NewArticulos } from "./NewArticulos";


export const NewContaine = () => {
  return (
    <aside className="bg-azul text-blanco py-[28px] py-[20px]">
        <h1 className="text-blanco text-4xl font-bold">New</h1>
        <NewArticulos
        tittle='que queremos'
        text='amor comprension y ternura'/>

        <NewArticulos
        tittle='que hacemos'
        text='vagabundiar'/>
        <NewArticulos
        tittle='como lo hacemos'
        text='siendo jovenes rebeldes'/>
    </aside>
  )
} 
