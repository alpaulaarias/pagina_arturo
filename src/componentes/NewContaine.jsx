import { NewArticulos } from './NewArticulos';

export const NewContaine = () => {
  return (
    <aside className="bg-azul text-blanco w-full sm:w-[400px] p-6 sm:p-10 rounded-xl shadow-lg mx-auto my-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 border-b border-white/30 pb-4 text-center sm:text-left">
        New
      </h1>

      <div className="space-y-6">
        <NewArticulos
          tittle="¿Qué queremos?"
          text="Amor, comprensión y ternura."
        />

        <NewArticulos
          tittle="¿Qué hacemos?"
          text="Vagabundear con estilo y sentido."
        />

        <NewArticulos
          tittle="¿Cómo lo hacemos?"
          text="Siendo jóvenes, rebeldes y libres."
        />
      </div>
    </aside>
  );
};
