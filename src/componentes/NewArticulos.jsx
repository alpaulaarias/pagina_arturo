export const NewArticulos = ({tittle, text}) => {
  return (
    <article className="h-[140px] w-[300px] border-b-2 border-gris-medio 
    rounded-xl shadow-md px-4 py-5 mb-4 last:border-none transition-all duration-300 hover:shadow-lg">
        <h2 className=" cursor-pointer hover:text-gris-medio text [20px] mb-3 font bold">{tittle}</h2>
        <p className="text-[15px]">{text}</p>
    </article>
  )
}

