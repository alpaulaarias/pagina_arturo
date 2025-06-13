import { NavBar } from "./NavBar";

export const HeaderPi = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-[#E60000] shadow-md m-0">
      <h1 className="text-white text-xl font-bold tracking-wide">
        Arturito
      </h1>
      <NavBar />
    </header>
  );
};
