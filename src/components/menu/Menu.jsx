import { Link } from "react-router-dom";

export const Menu = () => {
  const estiloLinks =
    "no-underline text-[20px] text-[aliceblue]  mx-[10px] hover:text-[22px] transform duration-200";
  return (
    <nav className="flex h-[5%] items-center gap-[70px] pl-[50px] bg-black">
      <Link to="/" className={estiloLinks}>Home</Link>
      <Link to="/Projeto" className={estiloLinks}>Projeto</Link>
      <Link to="/sobre" className={estiloLinks}>Sobre</Link>
      <Link to="/contato" className={estiloLinks}>Contato</Link>
    </nav>
  );
};
